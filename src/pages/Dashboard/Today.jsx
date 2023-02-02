import React from "react";
import { CgAdd } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import Card from "../../UI/card";
import { AiOutlineProject } from "react-icons/ai";
import { useGlobalContext } from "../../components/context";
const Today = () => {
  const { openModal } = useGlobalContext();
  return (
    <>
      <div className="today-container">
        <div className="today-head">
          <div>
            <h2>Today's Plan</h2>
            <h4>13th Jan,22</h4>
          </div>
          <IoMdAdd onClick={openModal} />
        </div>
        <div className="main-plan">
          {/* <h2>Sustainable Development Goals and Health Innnovatiion</h2> */}
          <h2>What are you plannng to do today?</h2>
          <div className="main-plan-details">
            <h2>Categorize</h2>
            <div>
              <h3>Time of activity</h3>
              <h4>13:00 - 14:00</h4>
            </div>
          </div>
        </div>
        <div className="weekly-report">
          <Card
            className="weekly-card"
            head={`Weekly Report`}
            message={`Track your performance`}
            btn={`view report`}
          />
          {/* <h2>Weekly Report</h2>
            <p>Track your performance</p>
            <button className="btn">View report</button> */}
        </div>
        <div className="current">
          <div className="in-progress">
            <Card
              head={`Study`}
              message={`In progress`}
              icon={<AiOutlineProject />}
            />
          </div>
          <div className="completed">
            <Card
              head={`Project work`}
              message={`completed`}
              icon={<AiOutlineProject />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
