import React from 'react';
import '../Styles/Home_Page.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header-image">
        <img src="https://cdn.discordapp.com/attachments/1029043565868884061/1175670851329347674/image.png?ex=656c13cd&is=65599ecd&hm=4cc3951d6147ced54d5363f281acddef59f64f149089a2f294e89b90596652ef&" alt="Header Image" />
      </div>
      <div className="Homepage-container">
        <h1>About Us</h1>
        <p>
          Our passion at Aurora Dental is to help kids and families achieve optimal oral health. We also seek to educate patients about the importance of getting regular dental care so they can smile brighter for a lifetime. Because we think that quality dental care should be within everyone’s reach, we follow the Alberta Dental Fee Guide, charging no extra.
        </p>
        <h3>Planting Roots in SE Edmonton</h3>
        <p>
          Delighted to open Aurora Dental, a brand-new dental clinic, Dr. Rakhee Parmar, Dr. Paul Delhon, and Dr. Travis Elliott are happy to be a part of our growing community. They are looking to make a long-term investment here. “I want to take care of the smiles of friends and neighbors for decades to come,” Dr. Rakhee said.
        </p>
      </div>
      <div className="boxes-container">
        <div className="feature-box">
          <h2>Relax in Our Cheerful Environment</h2>
          <p>
            Perhaps you've been to other dental practices in the past that have felt more clinical. That’s not the case at our office. Here, patient comfort is paramount! We have large windows, allowing lots of sunlight to brighten our space. Netflix is available for your viewing pleasure while you receive dental treatment.
          </p>
        </div>
        <div className="feature-box">
          <h2>Helping Patients Feel Comfortable</h2>
          <p>
            Perhaps you had a negative experience going to the dentist as a child. We understand that dental anxiety is real. That’s why we do everything we can to put patients at ease. Our care is gentle and we offer sedation options.
          </p>
        </div>
        <div className="feature-box">
          <h2>Maintaining a Presence in the Community</h2>
          <p>
            As patient education is a big part of what we do, we will be holding various events in our community. These will include free checkups and presentations to local schools. We want our patients and those in the community to enjoy healthy, happy smiles!
          </p>
        </div>
      </div>

      <div className="additional-feature">
        <h2>Helping Families Achieve Healthy Smiles</h2>
        <p>
          At our family dental practice, we especially love seeing entire families visit us for dental care. From toddlers and school-aged kids to teens and adults, patients of all ages are welcome in our dental office.
        </p>
        <p>
          One of our greatest passions is helping children adopt good oral hygiene habits so they can keep their teeth healthy and their smiles lovely.
        </p>

        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="meet-dentists-btn">
          MEET OUR DENTISTS
        </a>
      </div>

      <div className="bottom-feature">
        <h2>Providing an Array of Services</h2>
        <p>
          You don't have to visit several dental offices to get the care you need. We offer patients many high-quality dental services in one convenient location:
        </p>
      </div>

      <div className="appointment">
        <h2>Book an Appointment</h2>
        <p>
          Contact our dental office today to schedule a convenient Saturday or same-day appointment.
        </p>
      </div>

      
    </div>
  );
};

export default HomePage;