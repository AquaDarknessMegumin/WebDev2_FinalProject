import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/Nav_Bar";
import Footer from "./Component/Footer";

import Homepage from "./Pages/Home_Page";
import AboutUs from "./Pages/About_Us";
import DentistsPage from "./Pages/Dentists";
import ServicePage from "./Pages/OurServices";


import "./App.css";


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/dentists" element={<DentistsPage />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
