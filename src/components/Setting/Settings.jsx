import React from "react";
import "./settings.css";
import { GrClose } from "react-icons/gr";
import { colours } from "./data";
const Settings = () => {
  return (
    <>
      <div className="settings">
        <div className="settings-head">
          <h2>Settings</h2>
          <GrClose />
        </div>
        <div className="choose-theme">
          <h3>Theme Option</h3>
          <input type="radio" name="Light" id="" />
          <input type="radio" name="Dark" id="" />
        </div>
        <div className="theme-colours">
          <h3>Theme Colours</h3>
          <div className="colours">
            {colours.map((item) => {
              return <div style={{ background: { item } }}></div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
