import React from 'react';
import '../Styles/Home_Page.css';

const HomePage = () => {
  return (
    
    <div className="home-page">
   
      <div className="header-image">
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

      

      
    </div>
  );
};

export default HomePage;