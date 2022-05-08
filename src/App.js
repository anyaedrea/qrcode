import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/tabs/Tabs";
import Qrcode from "./components/qrcode/Qrcode";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("cv");
  const selectedTabEvent = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="App">
      <h1>Hallo, ich bin Nathania</h1>
      <p>
        Scannen Sie den Code, um{" "}
        {selectedTab === "linkedin"
          ? "mein LinkedIn Profil"
          : "meinen Lebenslauf"}{" "}
        zu schauen.
      </p>
      <Qrcode selectedTab={selectedTab} />
      <Tabs selectedTabEvent={selectedTabEvent} />
    </div>
  );
}

export default App;
