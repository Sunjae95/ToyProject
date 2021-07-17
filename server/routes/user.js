const express = require("express");
const jwt = require("jsonwebtoken");
const { modifyNickname, curUser } = require("../middleware/auth");
const router = express.Router();

//사용자 정보 불러오기
router.post("/", async (req, res) => {
  try {
    const jwtAuth = await curUser(req.body.user, process.env.JWT_SECRET);
    const { id, nickname, age, gender } = jwtAuth;

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

  const getAnswer = await modifyNickname(id, nickname, age, gender);
  if (getAnswer) {
    res.status(200).json({ modify: true });
  } else {
    //실패시
    res.status(500).json({ modify: false });
  }
});

module.exports = router;
