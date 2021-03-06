const express = require("express");
const jwt = require("jsonwebtoken");
const { modifyNickname, curUser } = require("../middleware/auth");
const router = express.Router();

//사용자 정보 불러오기
router.post("/", async (req, res) => {
  console.log(req.body.user);
  //jwt 인증
  const jwtAuth = await curUser(req.body.user, process.env.JWT_SECRET);
  const { id, nickname, age, gender } = jwtAuth;
  res.json({
    id,
    nickname,
    age,
    gender,
  });
});

//사용자 정보 수정하기
router.post("/modify", async (req, res) => {
  const { id, nickname, age, gender } = req.body;
  console.log(typeof id);
  console.log(typeof nickname);
  console.log(typeof age);
  console.log(typeof gender);
  const getAnswer = await modifyNickname(id, nickname, age, gender);
  if (getAnswer) {
    //성공시
    res.status(200).json({ modify: true });
  } else {
    //실패시
    res.status(500).json({ modify: false });
  }
});

module.exports = router;
