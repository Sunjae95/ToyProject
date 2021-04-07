const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

const REDIRECT_URI = 'http://localhost:8080/login'
const CLIENT_ID ='0e5c306bf6f12944bdff74345e12d459';

router.get('/',  (req, res) => {


      const loginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      res.json({ url: loginURL });
   });

module.exports = router;
