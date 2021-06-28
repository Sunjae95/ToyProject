const express = require("express");
const router = express.Router();
const { getAccessToken, getKakaoId, getJWT } = require("../middleware/auth");

router.get("/", (req, res) => {
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;
  res.json({
    url,
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
  const kakaoId = await getKakaoId(accessToken);
  const jwtToken = await getJWT(kakaoId);

  res.json({ user: jwtToken });
});

module.exports = router;
