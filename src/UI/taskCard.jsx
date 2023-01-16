import React from 'react';
const TaskCard = ({ category, time, task, icon, reminder }) => {
  return (
    <>
      <div className="task-card">
        <div className="category">
          <h4>{category}</h4>
          <p className="task-create-time">{time}</p>
        </div>
        <div className="specific-task">
          <a href="">
            <h3>{task}</h3>
          </a>
        </div>
        <div className="update">
          {icon}
          <h4>{reminder}</h4>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
