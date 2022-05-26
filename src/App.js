import "./App.css";
import Header from "./components/Header";
import Locations from "./components/Locations";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const activeMenu = useState();
  return (
    <div className="App">
      <Sidebar activeMenu={activeMenu} />
      <Header />
      <Locations activeMenu={activeMenu} />
    </div>
  );
}

export default App;
