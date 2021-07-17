import React, { useState } from 'react';
import { requestGET } from 'Api/index';
import { API_ENDPOINT } from 'Utility/config';
import ProblemList from './ProblemList/ProblemList';
import CreationPageHead from './CreationPageHead';
import axios from 'axios';
function CreationPage() {
  const [problems, setProblems] = useState(null);

  const getProblems = async () => {
    const url = `${API_ENDPOINT}/problem/createProblem`;

    axios({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: { user: localStorage.getItem('user') },
      withCredentials: true
    })
      .then(problems => {
        setProblems(problems.data);
      })
      .catch(e => console.log('getProblem', e));
  };

  return (
    <>
      <CreationPageHead getProblems={getProblems} />
      <ProblemList problems={problems} />
    </>
  );
}

export default CreationPage;
