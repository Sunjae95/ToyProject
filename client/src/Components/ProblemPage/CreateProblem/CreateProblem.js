import React, { useState } from 'react';
import { requestGET } from '../../../api';
import { API_ENDPOINT } from '../../../utils/config';
import ProblemList from './ProblemList/ProblemList';
function CreateProblem() {
  const [problems, setProblems] = useState(null);

  const getProblems = async () => {
    try {
      const data = await requestGET(`${API_ENDPOINT}/problem`);
      setProblems(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div onClick={getProblems}>뽑기 버튼</div>
      <ProblemList problems={problems}/>
    </>
  );
}

export default CreateProblem;
