const express = require("express");
const router = express.Router();
const {
  getAccessToken,
  getIdFromKakao,
  getJWT,
  curUser,
} = require("../middleware/auth");

router.get("/", (req, res) => {
  const loginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;
  res.json({
    url: loginURL,
  });
});

router.post("/auth", async (req, res) => {
  const { authCode } = JSON.parse(req.body.body);

  const bodyData = {
    grant_type: "authorization_code",
    client_id: process.env.REST_API_KEY,
    redirect_uri: process.env.REDIRECT_URI,
    code: authCode,
  };

  const accessToken = await getAccessToken(process.env.KAKAO_URL, bodyData);
  const id = await getIdFromKakao(accessToken);
  //user를 받으면 id 찾기 없으면 유저 저장
  const jwtToken = await getJWT(id, accessToken);

  res.json({ user: jwtToken });
});

module.exports = router;
