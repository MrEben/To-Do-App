import React from 'react';
import { AiOutlineClose, AiFillCaretDown,AiOutlineLogout,AiOutlineProject,AiOutlineSchedule } from 'react-icons/ai';
import './navbar.css';
const SideBar = () => {
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <span>e</span>
          <h2>
            Busy<span className="danger">Dev</span>
          </h2>
        </div>
        <div className="close">
          <AiOutlineClose />
        </div>
      </div>
      <div className="sidebar">
        <a href="#">
          <AiOutlineClose />
          <h3>Dashboard</h3>
        </a>
        <a href="#">
          <AiOutlineProject />
          <h3>Progress</h3>
        </a>
        <a href="#">
          <div>
            <AiOutlineSchedule />
            <h3>Scheduled</h3>
            <AiFillCaretDown />
          </div>
          <ul>
            <li>
              <AiOutlineClose />
              Item 1
            </li>
            <li>
              <AiOutlineClose />
              Item 1
            </li>
            <li>
              <AiOutlineClose />
              Item 3
            </li>
          </ul>
        </a>
        <a href="#">
          <AiOutlineClose />
          <h3>Settings</h3>
        </a>
        <a href="#">
          <AiOutlineLogout />
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
