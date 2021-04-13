const fetch = require('node-fetch');
const db = require('../db/index');
const jwt = require('jsonwebtoken');

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

const getJWT = async (user) => {
    const res = await saveUser(user);
    return res;
};

const saveUser = async (user) => {
    const checkUser = await db.query('SELECT id FROM users WHERE id = ?', [user.id]);
    const jwtToken = jwt.sign({
        id: user.id,
        nickname: user.properties.nickname,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, process.env.JWT_SECRET);


    if (checkUser[0].length === 0) {
        db.query('INSERT INTO users(id, nickname, jwt_token) VALUES (?, ?, ?)',
                [user.id, user.properties.nickname, jwtToken])
            .then(console.log('로그인삽입성공'))
            .catch(err => console.log('로그인삽입에러:', err));
    } else {
        db.query('UPDATE users SET jwt_token = ? WHERE id =?',
                [jwtToken, user.id])
            .then(console.log('로그인수정성공'))
            .catch(err => console.log('로그인수정에러:', err));
    }
    return jwtToken;
};

//유효검증은 나중에
const curUser = (token) => {
    const response = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        return decoded ? 'yes' : 'no';
    })

    return response;
}

module.exports = {
    getAccessToken,
    getUser,
    saveUser,
    getJWT,
    curUser
};