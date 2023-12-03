// app.jsx
import React, { useState } from 'react';
import '../Styles/CustomerProfile.css';
import NavBar from '../Component/Nav_Bar';
import Footer from '../Component/Footer';
const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userID: '',
    Name: '',
    Email: '',
    PhoneNo: '',
  });
  const [validEmail, setValidEmail] = useState(true);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // In a real application, you would send an API request to update user data on the server
  };

  const handleInputChange = (e, key) => {
    let value = e.target.value;

    // Validate input based on the key
    switch (key) {
      case 'userID':
        // Allow only numbers
        value = value.replace(/\D/g, '');
        break;
      case 'Name':
        // Allow only letters and spaces
        value = value.replace(/[^a-zA-Z\s]/g, '');
        break;
      case 'Email':
        // Validate email format
        const validEmailCharsRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setValidEmail(validEmailCharsRegex.test(value) || value === ''); // Empty string is considered valid
        break;
      case 'PhoneNo':
        // Allow only numbers and ensure length is 11 digits
        value = value.replace(/\D/g, '').substring(0, 11);
        break;
      default:
        break;
    }

    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  return (
    <div className="profile-page-container">
          <NavBar />
      <div className="profile-container">
        <div className="profile-header-container">
          <div className="profile-info-container">
            <div className="profile-picture-container">
              <img
                src="https://via.placeholder.com/200"
                alt="Profile"
                className="profile-picture"
              />
              {editMode && (
                <div className="change-photo-popup">
                  <p>Change photo</p>
                </div>
              )}
            </div>
            <div className="profile-text-container">
              <p>{userInfo.Name}</p>
              <p>Status: Patient</p>
            </div>
          </div>
          <div className="edit-profile-btn-container">
            <button className="edit-profile-btn" onClick={handleEditClick}>
              Edit Profile
            </button>
          </div>
        </div>
        <div className="profile-details-container">
          <div className="details-column">
            {Object.entries(userInfo).map(([key, value]) => (
              <div className="detail-row" key={key}>
                <label className="detail-label">{key}:</label>
                {editMode ? (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(e, key)}
                    className={`edit-input ${key === 'Email' && !validEmail ? 'invalid-email' : ''}`}
                  />
                ) : (
                  <span className="detail-text">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        {editMode && (
          <div className="save-button-container">
            <button className="save-button" onClick={handleSaveClick}>
              Save Changes
            </button>
          </div>
        )}
      </div>
      <Footer/>

    </div>
  );
};

export default ProfilePage;