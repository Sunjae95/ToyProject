const fetch = require('node-fetch');
const db = require('../db/index');

const getAccessToken = async (url, bodyData) => {
    const queryStringBody = Object.keys(bodyData)
        .map(k => encodeURIComponent(k) + "=" + encodeURI(bodyData[k]))
        .join("&");

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryStringBody
    };

    const getData = await fetch(url, requestOptions);
    const postData = await getData.json();

    return postData;
};

const getUser = async (accessToken) => {
    const data = await fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken.access_token}`
        }
    });
    const user = await data.json();
    return user;
};

const saveUser = async (id, nickname, accessToken) => {
    await db.query('INSERT INTO users(id, nickname, accessToken) VALUES (?, ?, ?)',
            [id, nickname, accessToken]);
};

const getJWT = (prams) => {

};



module.exports = {
    getAccessToken,
    getUser,
    saveUser
};