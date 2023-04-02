import { useState } from "react";
import { GrClose, GrSchedule } from "react-icons/gr";

import { BsAlarm } from "react-icons/bs";
import {
  AiOutlineUnorderedList,
  AiOutlineTag,
  AiOutlineClose,
  AiFillCaretDown,
} from "react-icons/ai";
import { useGlobalContext } from "./context";
const AddTask = () => {
  const [toggleSchedule, setToggleSchedule] = useState(false);
  const { closeModal, noteText, setNoteText } = useGlobalContext();
  const characterLimit = 30;
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSubmit = () => {
    closeModal();
  };
  return (
    <>
      <div className="task-add-modal">
        <div className="add-task">
          <div className="add-task-head">
            <h2>Quick Add Task</h2>
            <div className="close-add-task" onClick={closeModal}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="add-task-input">
            <form action="">
              <input
                value={noteText}
                onChange={handleChange}
                type="text"
                placeholder="Enter task..."
              />
              <button
                className="btn"
                onClick={() => setToggleSchedule(!toggleSchedule)}
              >
                Schedule
              </button>
            </form>
          </div>
          {characterLimit - noteText.length <= 0 ? (
            <h4 className="error-message">input text limit has been reached</h4>
          ) : null}
          <div className="add-task-footer">
            <button onClick={handleSubmit} className="submit-task btn">
              add task
            </button>
            <div className="add-task-details">
              <AiOutlineUnorderedList />
              <AiOutlineTag />
              <BsAlarm />
              <GrSchedule />
            </div>
          </div>
          {toggleSchedule && (
            <>
              <div>sleep</div>
              <DateComponent />
              <div>
                Description
                <div className="comp">Print Mock Test</div>
              </div>
              <div>
                Tags <div className="comp">work</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const DateComponent = () => {
  return (
    <>
      <div className="date-component">
        <div className="today">
          Date{" "}
          <div className="comp">
            Today <AiFillCaretDown />
          </div>
        </div>
        <div className="time">
          Time{" "}
          <div>
            <div className="comp">14</div>:<div className="comp">00</div>
          </div>
        </div>
      </div>
    </>
  );
};
const Description = () => {
  return (
    <>
      <div>
        Description
        <div className="comp">Print Mock Test</div>
      </div>
    </>
  );
};
export default AddTask;
