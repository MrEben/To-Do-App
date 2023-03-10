import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineLogout,
  AiOutlineProject,
  AiOutlineSchedule,
  AiOutlineDashboard,
  AiFillEdit
} from "react-icons/ai";
import {links} from '../../data/navData'
import { useGlobalContext } from "../../components/context";
import { Link } from "react-router-dom";
import "./navbar.css";
const SideBar = () => {
  const { isSidebarOpen, closeSidebar, isSettingsOpen,setIsSettingsOpen } = useGlobalContext();
  const [displayDropDown, setDisplayDropDown] = useState(false);
  return (
    <aside className={isSidebarOpen ? "activeAside" : ""}>
      <div className="top">
        <div className="logo">
          <span><AiOutlineSetting /></span>
          <h2>
            Busy<span className="danger">Dev</span>
          </h2>
        </div>
        <div className="close" onClick={closeSidebar}>
          <AiOutlineClose />
        </div>
      </div>
      <div className="sidebar">
        {/* {
          links.map((item) => {
            return <div>sd</div>
          })
        } */}
        <Link to="/" className="activenav">
          <AiOutlineDashboard />
          <h3>Dashboard</h3>
        </Link>
        <Link to="/editor">
          <AiFillEdit />
          <h3>Editor</h3>
        </Link>
        <a href="#" onClick={() => setDisplayDropDown(!displayDropDown)}>
          <div>
            <AiOutlineSchedule />
            <h3>Scheduled</h3>
            <AiFillCaretDown className={displayDropDown ? "rotatecaret" : ""} />
          </div>
          <ul className={displayDropDown ? "displayscheduled" : "offscheduled"}>
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
        <a href="#" onClick={()=>setIsSettingsOpen(!isSettingsOpen)}>
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
