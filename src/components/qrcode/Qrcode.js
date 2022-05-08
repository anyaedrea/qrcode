import React from "react";

function Qrcode({ selectedTab }) {
  const setLink = () => {
    let link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
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
    <div>
      <img src={setLink()}></img>
    </div>
  );
}

export default Qrcode;
