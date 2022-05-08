import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Tabs.css";

function Tabs({ selectedTabEvent }) {
  const handleClick = (e) => {
    selectedTabEvent(e.target.value);
  };
  return (
    <div>
      <div className="tabs-container">
        <label for="cv">CV</label>
        <input
          type="radio"
          name="radio-option"
          id="cv"
          value="cv"
          onClick={handleClick}
        />
        <label for="linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </label>
        <input
          type="radio"
          name="radio-option"
          id="linkedin"
          value="linkedin"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Tabs;
