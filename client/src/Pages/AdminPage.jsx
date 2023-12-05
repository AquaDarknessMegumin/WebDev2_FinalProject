import React, { useState, useEffect } from 'react';
import '../Styles/AdminPage.css';

const Admin_Page = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleEditClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleEditFormSubmit = (editedData) => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment === selectedAppointment ? editedData : appointment
    );
    setAppointments(updatedAppointments);
    setSelectedAppointment(null);
  };

  return (
    <div className="admin-container">
      <div className="admin-profile">
        <img src={require("./pages/adminicon.jpg")} alt="Admin Profile" />
        <div className="admin-info">
          <h2>Admin Name</h2>
          <p>Email: admin@gmail.com</p>
        </div>
      </div>

      <div className="edit-button">
        <button onClick={() => handleEditClick(appointments[0])}>
          Edit Row
        </button>
      </div>

      <div className="appointment-table">
        <table>
          <thead>
            <tr>
              <th>Patient's Name</th>
              <th>Dentist</th>
              <th>Type of Service/s</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.patientName}</td>
                <td>{appointment.dentist}</td>
                <td>{appointment.service}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedAppointment && (
        <div className="edit-form">
          {/* Your editable input fields go here */}
          <input
            type="text"
            name="patientName"
            value={selectedAppointment.patientName}
            onChange={(e) =>
              handleEditFormSubmit({
                ...selectedAppointment,
                patientName: e.target.value,
              })
            }
          />
          {/* Repeat for other fields */}
          <button onClick={() => handleEditFormSubmit(selectedAppointment)}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin_Page;
