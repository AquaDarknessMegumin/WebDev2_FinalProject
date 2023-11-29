

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/Nav_Bar";
import Footer from "./Component/Footer";
import Homepage from "./Pages/Home_Page";
import AboutUs from "./Pages/About_Us";
import DentistsPage from "./Pages/Dentists";
import ServicePage from "./Pages/OurServices";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/CustomerProfile";

import "./App.css";

function App() {
  return (
    <div className="AppJSX-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Routes>
                  <Route path="/home" element={<Homepage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/dentists" element={<DentistsPage />} />
                  <Route path="/service" element={<ServicePage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;






// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./Component/Nav_Bar";
// import Footer from "./Component/Footer";
// import Homepage from "./Pages/Home_Page";
// import AboutUs from "./Pages/About_Us";
// import DentistsPage from "./Pages/Dentists";
// import ServicePage from "./Pages/OurServices";
// import LoginPage from "./Pages/LoginPage";
// import ProfilePage from "./Pages/CustomerProfile";



// import "./App.css";



// function App() {
//   return (
//     <div className="AppJSX-container">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/dentists" element={<DentistsPage />} />
//           <Route path="/service" element={<ServicePage />} />
//           <Route path="/profile" element={<ProfilePage />} /> 
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

