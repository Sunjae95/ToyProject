import React from 'react';
import PropTypes from 'prop-types';

function Problem({ no, grade, title }) {
  return (
    <div>
      문제번호: {no}
      문제등급: {grade}
      문제제목: {title}
    </div>
  );
}

function ProblemList({ problems }) {
  return (
    <div
      style={{
        height: '300px',

        boxSizing: 'border-box'
      }}
    >
      {problems &&
        problems.map(problem => {
          return (
            <Problem
              key={problem.no}
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
  no: PropTypes.number,
  grade: PropTypes.string,
  title: PropTypes.string
};

ProblemList.propTypes = {
  problems: PropTypes.array
};
export default ProblemList;
