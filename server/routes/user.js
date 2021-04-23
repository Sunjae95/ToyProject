const express = require("express");
const jwt = require("jsonwebtoken");
const { modifyNickname } = require("../middleware/auth");
const router = express.Router();

//사용자 정보 불러오기
router.post("/", (req, res) => {
  console.log(req.body.user);
  jwt.verify(req.body.user, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      //jwt일치X
      res.json({ check: false });
    }
    res.json(decoded);
  });
});

//사용자 정보 수정하기
//로그인할때 불러오는 값은 id만 사용하기에 nickname 수정시 DB만 수정하기
router.post("/modify", async (req, res) => {
  // const accessToken = await getAccessTokenFromDB(req.body.id);
  // console.log(accessToken, req.body.nickname);
  const { id, nickname } = req.body;
  await modifyNickname(id, nickname);
  res.json({ modify: true });
});
module.exports = router;
