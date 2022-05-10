import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Tabs.css";

function Tabs({ selectedTabEvent }) {
  const handleClick = (e) => {
    selectedTabEvent(e.target.value);
  };
  return (
    <div className="tabs-container">
      <div className="tabs">
        {/* <div className="indicator"></div> */}
        <input
          type="radio"
          name="radio-option"
          id="cv"
          value="cv"
          onChange={handleClick}
          defaultChecked
        />
        <label for="cv">CV</label>
        <input
          type="radio"
          name="radio-option"
          id="linkedin"
          value="linkedin"
          onChange={handleClick}
        />
        <label for="linkedin">
          {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
          LinkedIn
        </label>
      </div>
    </div>
  );
}

export default Tabs;
