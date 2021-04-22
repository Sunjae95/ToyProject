const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body.user);
  jwt.verify(req.body.user, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      //jwt일치X
      res.json({ check: false });
    }
    console.log("성공: ", decoded);
    res.json(decoded);
  });
});

module.exports = router;
