const express = require('express');
const router = express.Router();
const { getAccessToken, getUser, saveUser, getJWT } = require('../middleware/auth');

router.get('/', (req, res) => {
   const loginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;
   res.json({
      url: loginURL
   });
});

router.post('/auth', async (req, res) => {
   const { authCode } = req.body;
 
   const bodyData = {
      grant_type: 'authorization_code',
      client_id: process.env.REST_API_KEY,
      redirect_uri: process.env.REDIRECT_URI,
      code: authCode
   };

   const accessToken = await getAccessToken(process.env.KAKAO_URL, bodyData);
   const user = await getUser(accessToken);

   const jwtToken = await getJWT(user, accessToken);
   res.json(jwtToken);
});
module.exports = router;