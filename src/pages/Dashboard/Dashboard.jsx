import React from "react";
import Today from "./Today";
import Monthly from "./Monthly";
import User from "../Navbar/User";
import AddTask from "../../components/AddTask";
import Settings from "../../components/Setting/Settings";
import { useGlobalContext } from "../../components/context";
import "./dashboard.css";
const Dashboard = () => {
  const { isModalOpen } = useGlobalContext();
  return (
    <>
      <div className="dashboard-layout">
        <Today />
        <Monthly />
        <User />
        <Settings />
        {isModalOpen ? <AddTask /> : null}
      </div>
    </>
  );
};

export default Dashboard;
