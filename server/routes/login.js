const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

router.get('/',  (req, res) => {
   fetch(`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REST_API_KEY}&redirect_uri=http://localhost:8080/login`)
      .then(response => res.json({url: response.url}));
});

module.exports = router;
