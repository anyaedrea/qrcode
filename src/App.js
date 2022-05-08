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
      <Qrcode selectedTab={selectedTab} />
      <Tabs selectedTabEvent={selectedTabEvent} />
    </div>
  );
}

export default App;
