const express = require("express");
const { checkUser } = require("../middleware/auth");
const { getProblem } = require("../middleware/problem");
const router = express.Router();

router.post("/createProblem", async (req, res) => {
  try {
    const isVerify = checkUser(req.body.user, process.env.JWT_SECRET);
    if (!isVerify) return res.status(500).json({ isVerify: false });

    const userId = isVerify;
    const data = await getProblem(userId);

    return res.status(200).send(data);
  } catch (e) {
    console.log("getProblem Error:", e);
  }
});
module.exports = router;
