import React from 'react';
import {
  AiOutlineClose,
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineLogout,
  AiOutlineProject,
  AiOutlineSchedule,
  AiOutlineDashboard,
} from 'react-icons/ai';
import { useGlobalContext } from '../../components/context';
import './navbar.css';
const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? 'activeAside' : ''}>
      <div className="top">
        <div className="logo">
          <span>e</span>
          <h2>
            Busy<span className="danger">Dev</span>
          </h2>
        </div>
        <div className="close" onClick={closeSidebar}>
          <AiOutlineClose />
        </div>
      </div>
      <div className="sidebar">
        <a href="#" className="activenav">
          <AiOutlineDashboard />
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
          <AiOutlineSetting />
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
