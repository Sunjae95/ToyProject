const fetch = require("node-fetch");
const db = require("../db/index");
const jwt = require("jsonwebtoken");

const getAccessToken = async (url, bodyData) => {
  const queryStringBody = Object.keys(bodyData)
    .map((k) => encodeURIComponent(k) + "=" + encodeURI(bodyData[k]))
    .join("&");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: queryStringBody,
  };

  const getData = await fetch(url, requestOptions);
  const postData = await getData.json();

  return postData;
};
//accessToken을 이용하여 user정보를 가져옴
//이 프로젝트에서는 id만 필요하기에 id만 받아 올것..!
const getIdFromKakao = async (accessToken) => {
  const data = await fetch("https://kapi.kakao.com/v2/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken.access_token}`,
    },
  });
  const user = await data.json();
  return user.id;
};

//kakao에서 id 받기
//DB에서 id 있는지 확인후 있으면 id와 함께jwt토큰만들기 / 없으면 db생성후 jwt토큰만들기
//jwt토큰 프론트로 넘겨주기

const getJWT = async (id, access_token) => {
  saveUser(id, access_token);
  const jwtToken = jwt.sign(
    {
      id: id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.JWT_SECRET
  );
  return jwtToken;
};

//id입력후 아이디가 있다면 accessToken만 저장 없다면 id와 accessToken저장
const saveUser = async (id, access_token) => {
  const checkUser = await db.query("SELECT id FROM users WHERE id = ?", [id]);

  if (checkUser[0].length === 0) {
    db.query("INSERT INTO users(id, access_token) VALUES (?, ?)", [
      id,
      access_token.access_token,
    ])
      .then(console.log("로그인삽입성공"))
      .catch((err) => console.log("로그인삽입에러:", err));
  } else {
    db.query("UPDATE users SET access_token = ?  WHERE id = ?", [
      access_token.access_token,
      id,
    ])
      .then(console.log("로그인수정성공"))
      .catch((err) => console.log("로그인수정에러:", err));
  }
};

//jwt토큰 인증하고 id를 통해 현재 유저 정보 불러오기(id, nickname)
const curUser = async (token, password) => {
  try {
    const jwtAuth = await jwt.verify(token, password);
    // console.log(jwtAuth);
    const id = jwtAuth.id;
    const response = await db.query(
      "SELECT id, nickname, age, gender FROM users WHERE id = ?",
      [id]
    );
    console.log("토큰인증성공");
    return response[0][0];
  } catch (e) {
    console.log("토큰인증실패");
    //인증이 안됨 ex 시간초과
    throw e;
  }
};

const getAccessTokenFromDB = async (id) => {
  const accessToken = await db.query(
    "SELECT access_token FROM users WHERE id = ?",
    [id]
  );
  return accessToken;
};

const modifyNickname = async (id, nickname, age, gender) => {
  //  데이터 조회
  // db.query('UPDATE users SET nickname = ? WHERE id =?', [nickname, id])
  //   .then(console.log('user수정성공'))
  //   .catch(err=> console.log('user 수정실패'));
  try {
    const res = await db.query(
      "UPDATE users SET nickname = ?, age= ?, gender = ?  WHERE id =?",
      [nickname, age, gender, id]
    );
    return res;
  } catch (e) {
    return false;
  }
};

module.exports = {
  getAccessToken,
  getIdFromKakao,
  saveUser,
  getJWT,
  curUser,
  getAccessTokenFromDB,
  modifyNickname,
};
