import React from 'react';
import Img from '../../assets/avatar3.jpg';
import {FaUser} from 'react-icons/fa'
const User = () => {
  return (
    <>
      <div className="app-user">
        <div className="user-img">
          <img src={Img} alt="user" />
        </div>
        <div className="user-details">
          <h3>Dr. Riddle</h3>
          <h4>Scientist</h4>
        </div>
        <div className="schedule-event">
          <FaUser />
        </div>
      </div>
    </>
  );
};

export default User;
