import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useGlobalContext } from "./context";
const AddTask = () => {
  const { closeModal } = useGlobalContext();
  return (
    <>
      <div className="task-add-modal">
        <div className="add-task">
          <div className="add-task-head">
            <h2>Quick Add Task</h2>
            <div className="close-add-task" onClick={closeModal}>
              <GrClose />
            </div>
          </div>
          <div className="add-task-input">
            <form action="">
              <input type="text" placeholder="Enter task..." />
              <button className="btn">Schedule</button>
            </form>
          </div>
          <div className="add-task-footer">
            <button className="submit-task btn">add task</button>
            <div className="add-task-details">
              <FaAccessibleIcon />
              <FaAccessibleIcon />
              <FaAccessibleIcon />
              <FaAccessibleIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
