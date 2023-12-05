
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./Component/Nav_Bar";
import Footer from "./Component/Footer";
import Homepage from "./Pages/Home_Page";
import AboutUs from "./Pages/About_Us";
import DentistsPage from "./Pages/Dentists";
import ServicePage from "./Pages/OurServices";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/CustomerProfile";
import Admin_Page from "./Pages/AdminPage";
import "./App.css";

function App() {
  const isAuthenticated = true; // Change this based on your authentication logic

  return (
    <div className="AppJSX-container">
      <BrowserRouter>
        <Routes>
          {/* Display LoginPage at the root */}
          <Route path="/" element={<LoginPage />} />

          {/* If authenticated, display authenticated routes */}
          {isAuthenticated ? (
            <> 
            
              <Route path="/home" element={<Homepage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/dentists" element={<DentistsPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/admin" element={<Admin_Page />} />

              <Route path="/profile" element={<ProfilePage />} />
            </>
          ) : (
            // If not authenticated, navigate to LoginPage
            <Navigate to="/login" />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import NavBar from "./Component/Nav_Bar";
// import Footer from "./Component/Footer";
// import Homepage from "./Pages/Home_Page";
// import AboutUs from "./Pages/About_Us";
// import DentistsPage from "./Pages/Dentists";
// import ServicePage from "./Pages/OurServices";
// import LoginPage from "./Pages/LoginPage";
// import ProfilePage from "./Pages/CustomerProfile";

// import "./App.css";

// const isAuthenticated = true; // Change this based on your authentication logic

// // PrivateRoute component to protect routes
// const PrivateRoute = ({ element, ...rest }) => {
//   return isAuthenticated ? (
//     element
//   ) : (
//     <Navigate to="/login" state={{ from: rest.location.pathname }} />
//   );
// };

// function App() {
//   return (
//     <div className="AppJSX-container">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<NavBar />} />
//           <Route path="/home" element={<Homepage />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/dentists" element={<DentistsPage />} />
//           <Route path="/service" element={<ServicePage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/" element={<Footer />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;























// // AYAW NI HILABTA

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
//           <Route path="/home" element={<Homepage />} />
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

