import ChartDashBoard from "./Components/Chart/ChartDashboard";
import Music from "./Components/Music/Music";
import Dashboard from "./Home/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const handleClick = () => {
    alert("Listen to music");
  };

  return (
    <>
      <>
        <Dashboard />
        <ChartDashBoard />
      </>
      <br />
      <h1 style={{ color: "green" }}>
        Relax for Listening to music <i className="fas fa-user"></i>{" "}
      </h1>

      <Music/>
    </>
  );
}

export default App;
