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

 const getJWT = async (user, accessToken) => {
    saveUser(user, accessToken);

};

const saveUser = async (user, accessToken) => {
    const checkUser = await db.query('SELECT id FROM users WHERE id = ?', [user.id]);
    if(checkUser[0].length === 0){
        db.query('INSERT INTO users(id, nickname, accessToken) VALUES (?, ?, ?)',
                  [user.id, user.properties.nickname, accessToken.access_token])
                  .then(console.log('로그인삽입성공'))
                  .catch(err => console.log('로그인삽입에러:',err));
    } else {
        db.query('UPDATE users SET accessToken = ? WHERE id =?',
                  [accessToken.access_token, user.id])
                  .then(console.log('로그인수정성공'))
                  .catch(err=> console.log('로그인수정에러:', err));
    }
};



module.exports = {
    getAccessToken,
    getUser,
    saveUser,
    getJWT
};