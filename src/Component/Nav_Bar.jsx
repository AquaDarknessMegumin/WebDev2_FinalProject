import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Nav_Bar.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState('');

  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src="pictures/DentEaseNav.png" alt="Logo" className="logo" />

        <div className="burger-menu" onClick={() => setMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </div>

        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li className={activePage === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={activePage === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
          <li className={activePage === '/service' ? 'active' : ''}><Link to="/service">Services</Link></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Make an Appointment</a></li>
        </ul>

        <div className="dropdown">
          <button
            className="profileicon"
            type="button"
            id="profileDropdown"
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faUserCircle} />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu" aria-labelledby="profileDropdown">
              <Link className="dropdown-item" to="/profile">Profile</Link>
              <Link className="dropdown-item" to="/settings">Settings</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
