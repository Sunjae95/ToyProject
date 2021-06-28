const express = require("express");
const jwt = require("jsonwebtoken");
const { modifyNickname, curUser } = require("../middleware/auth");
const router = express.Router();

//사용자 정보 불러오기
router.post("/", async (req, res) => {
  //jwt 인증
  console.log(req.get());
  // console.log(req.body.body); //미리안받아주면 오류나옴
  // const token = await req.body.body.user;
  try {
    const jwtAuth = await curUser(req.body.user, process.env.JWT_SECRET);
    const { id, nickname, age, gender } = jwtAuth;

    console.log("jwt인증");
    res.json({
      id,
      nickname,
      age,
      gender,
    });
  } catch (e) {
    console.log("jwt인증오류", e);
  }
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
