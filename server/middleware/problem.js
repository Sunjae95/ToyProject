const db = require("../db/index");

const getProblem = async () => {
  try {
    const getData = await db.query("select * from problems");
    // const result = await getData[0];
    // console.log(getData[0])
    return getData[0];
  } catch (e) {
    console.log("getProblem Error:", e);
  }
};
module.exports = {
  getProblem,
};
