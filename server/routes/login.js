const express = require("express");
const router = express.Router();
const {
  getAccessToken,
  getKakaoId,
  getJWT,
  checkUser,
} = require("../middleware/auth");

router.get("/", (req, res) => {
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;
  res.json({
    url,
  });
});

router.post("/auth", async (req, res) => {
  const code = req.body.authCode;

  const bodyData = {
    grant_type: "authorization_code",
    client_id: process.env.REST_API_KEY,
    redirect_uri: process.env.REDIRECT_URI,
    code,
  };

  const accessToken = await getAccessToken(process.env.KAKAO_URL, bodyData);
  const kakaoId = await getKakaoId(accessToken);
  const jwtToken = await getJWT(kakaoId);

  res.json({ user: jwtToken });
});
//return을 안해주면 오류가 남
router.post("/checkLogin", (req, res) => {
  const isChecked = checkUser(req.body.user, process.env.JWT_SECRET);
  if (isChecked) return res.json({ isChecked: true });
  return res.json({ isChecked: true });
});

module.exports = router;
