import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';
import Img from '../../assets/avatar3.jpg';
import { useGlobalContext } from '../../components/context';

const TopNav = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <div className="right">
        <div className="top">
          <div id="menu-btn" className="menu-btn" onClick={openSidebar}>
            <BiMenuAltLeft />
          </div>
          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>Ebenezer</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src={Img} alt="not seen" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav