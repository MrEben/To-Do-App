import React, { useState } from "react";
import "./settings.css";
import { AiOutlineClose } from "react-icons/ai";
import { colours } from "./data";
import { useGlobalContext } from "../context";
const Settings = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const { isSettingsOpen, setIsSettingsOpen } = useGlobalContext();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    document.body.classList.toggle("dark-theme-variables");
  };
  const setTheme = (colour) => {
    document.body.classList.toggle(`${colour}-theme-variables`);
    if (colour === "pink") {
      document.body.className = "";
    }
  };
  const setColor = (e) => {
    // const currentColour = e.target.style.getPropertyValue("background");
    // console.log(currentColour);
    // setTheme(currentColour);
    // Get the background color of the clicked element
    const currentColour = e.target.style.backgroundColor;

    // Call the setTheme function with the selected color
    setTheme(currentColour);
  };
  return (
    <>
      <div
        className={
          isSettingsOpen
            ? "settings-container hide-settings"
            : "settings-container "
        }
      >
        <div className="settings ">
          <div className="settings-head">
            <h2>Settings</h2>
            <AiOutlineClose
              size="2em"
              className="close-settings"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            />
          </div>
          <div className="choose-theme">
            <h3>Theme Option</h3>
            <div>
              <form action="">
                <label className="form-control">
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  Light
                </label>
                <label className="form-control">
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  Dark
                </label>
              </form>
            </div>
          </div>
          <div className="theme-colours">
            <h3>Theme Colours</h3>
            <div className="colours">
              {colours.map((item, index) => {
                return (
                  <div
                    onClick={setColor}
                    key={index}
                    style={{ background: `${item}` }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
