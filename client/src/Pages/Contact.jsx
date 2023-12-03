import React from 'react';
import '../Styles/Contact.css';
import NavBar from '../Component/Nav_Bar';
import Footer from '../Component/Footer';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <NavBar/>
      <div className="contact-heading">
        <h2>Contact DentEase Dental Clinic</h2>
        <p>We'd Love to Hear from You! Call (+63) 927 815 7638</p>
      </div>
      <div className="contact-info">
        <div className="office-hours">
          <h3>Office Hours</h3>
          <table className="office-hours-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>10:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>11:00 AM - 7:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>10:00 AM - 7:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="find-us">
          <h3>Find Us</h3>
          <p>
            Our Clinic is located in Gov. M. Cuenco Ave, Cebu City, 6000 Cebu, next to Rosedale Place. Book your appointment online today.
          </p>
          <img src="pictures/location.png" alt="DentEase Location" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
