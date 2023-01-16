import React from 'react';
import Today from './Today';
import Monthly from './Monthly';
import User from '../Navbar/User';
import './dashboard.css';
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-layout">
        <Today />
        <Monthly />
        <User />
      </div>
    </>
  );
};

export default Dashboard;
