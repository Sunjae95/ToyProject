const db = require("../db/index");

//문제 뽑기
const getProblem = async () => {
  //id값 받기
  try {
    //현재 사용자에게 등록되지 않은 문제 불러오기
    const unregisterdProblems = await db.query(
      "SELECT * FROM problems WHERE no NOT IN (SELECT myno FROM problems_users WHERE myid = ?) ORDER BY rand() limit 3",
      [1687864298]
    );
    const tmp = unregisterdProblems[0].map((v) => v.no);
    db.query(
      'INSERT INTO problems_users (myno, myid, solve) values(?,?,"0"),(?,?,"0"),(?,?,"0")',
      [tmp[0], 1687864298, tmp[1], 1687864298, tmp[2], 1687864298]
    )
      .then(console.log("사용자에게 문제 등록성공"))
      .catch((e) => console.log("문제 등록실패 오류: ", e));

    return unregisterdProblems[0];
  } catch (e) {
    console.log("getProblem Error:", e);
  }
};

module.exports = {
  getProblem,
};
