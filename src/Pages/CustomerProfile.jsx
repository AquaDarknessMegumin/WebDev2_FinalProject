import React from 'react';

import '../Styles/CustomerProfile.css';


const ProfilePage = () => {
  // Assuming you have user information available
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    // Add more user details as needed
  };

  // Dummy user history data for illustration
  const userHistory = [
    { date: '2023-01-01', action: 'Profile Created' },
    { date: '2023-06-15', action: 'Booked at 10:30' },
    // history niya bali mga booking history
  ];

  return (
    <div>
      <div>
        {/* Display user picture here */}
        <img src="path/to/user-picture.jpg" alt="User" style={{ width: '150px', height: '150px' }} />
      </div>
      
      <div>
        {/* Profile Menu */}
        <ul>
          <li><a href="#information">Information</a></li>
          <li><a href="#history">History</a></li>
        </ul>
      </div>

      {/* Information Section */}
      <div id="information">
        <h2>Information</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        {/* Add more user information fields as needed */}
      </div>

      {/* History Section */}
      <div id="history">
        <h2>History</h2>
        <ul>
          {userHistory.map((entry, index) => (
            <li key={index}>
              <strong>{entry.date}:</strong> {entry.action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
