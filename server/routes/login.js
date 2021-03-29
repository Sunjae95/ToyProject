const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   return res.json({login: "success"});
});


module.exports = router;
