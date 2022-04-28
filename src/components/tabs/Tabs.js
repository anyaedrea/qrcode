import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Tabs() {
  return (
    <div>
      <div className="tabs-container">
        <label for="cv">CV</label>
        <input type="radio" name="radio-option" id="cv" value="cv" />
        <label for="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </label>
        <input
          type="radio"
          name="radio-option"
          id="linkedin"
          value="linkedin"
        />
      </div>
    </div>
  );
}

export default Tabs;
