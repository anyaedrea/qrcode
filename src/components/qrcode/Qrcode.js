import React from "react";
import "./Qrcode.css";

function Qrcode({ selectedTab }) {
  let options = {
    bgcolor: "CFA9FF",
  };
  const setLink = () => {
    let link = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&bgcolor=${options.bgcolor}&data=`;
    console.log(link);
    if (selectedTab === "linkedin") {
      return (
        link + "https://www.linkedin.com/in/nathania-edrea-haryanto-70a688232/"
      );
    }
    return (
      link +
      "https://drive.google.com/file/d/1mLY3ZWI0CCTw6HL914cZwkUr07e7LhR7/view?usp=sharing"
    );
  };
  return (
    <div className="qrcode-bg">
      <img src={setLink()}></img>
    </div>
  );
}

export default Qrcode;
