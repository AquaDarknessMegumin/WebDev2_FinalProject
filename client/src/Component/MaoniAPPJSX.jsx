import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Pages/Nav_Bar";
import Homepage from "./Pages/Home_Page";
import "./App.css"; // Ensure correct path to your CSS file

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 