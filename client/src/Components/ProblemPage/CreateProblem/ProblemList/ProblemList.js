import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../CreationPage.css';

function Problem({ no, grade, title }) {
  const [card, setCard] = useState(false);

  const onFilp = () => {
    setCard(!card);
  };

  if (!card)
    return (
      <div className={'problemItem'} onClick={onFilp}>
        뒷면
      </div>
    );

  return (
    <>
      <div className="problemItem" onClick={onFilp}>
        <p>문제제목: {title}</p>
        <p>문제번호: {no}</p>
        <p>문제등급: {grade}</p>
      </div>
    </>
  );
}

function ProblemList({ problems }) {
  return (
    <div>
      {problems &&
        [...problems].map((problem, index) => {
          return (
            <Problem
              key={index}
              no={problem.no}
              grade={problem.grade}
              title={problem.title}
            />
          );
        })}
    </div>
  );
}

Problem.propTypes = {
  no: PropTypes.string,
  grade: PropTypes.string,
  title: PropTypes.string
};

ProblemList.propTypes = {
  problems: PropTypes.array
};
export default ProblemList;
