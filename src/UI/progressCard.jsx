import React from 'react';
const Progress = ({topic,progress,icon}) => {
  return (
    <>
      <div className="progress-card">
        {icon}
        <div>
          <h2>{topic}</h2>
          <p>{progress}</p>
        </div>
      </div>
    </>
  );
};

export default Progress;
