import React from 'react';
import '../Styles/Dentists.css';
import NavBar from '../Component/Nav_Bar';
import Footer from '../Component/Footer';
const DentistsPage = () => {
  const dentists = [
    {
      name: 'Aisha B. Malinao',
      job: 'Orthodontist',
      imageUrl: 'pictures/aisha.jpg',
    },
    {
      name: 'Shawn Ryan C. Nacario',
      job: 'Periodontist',      
      imageUrl: 'pictures/shawn.jpg',
    },
    {
      name: 'Christian Gabriel Dela Cruz',
      job: 'Endodontist',    
      imageUrl: 'pictures/garb.png',
    },
    {
      name: 'Jeremiah Lopez Juinio',
      job: 'Orthodontist',    
      imageUrl: 'pictures/jeremiah.jpg',
    }
  ];

  return (
    <div className="dentists-page">
<NavBar />
        <img src="pictures/teeth.jpg" alt="Dental Clinic" className="clinic-image" />
      <h1>Meet the Dentists at DentEase Dental Clinic</h1>
      <p className='dentist-paragraph'>Seamless Smiles, Effortless Appointments</p>
      <div className="dentists-container">
        {dentists.map((dentist, index) => (
          <div className="dentist-card" key={index}>
            <img src={dentist.imageUrl} alt={dentist.name} className="dentist-image" />
            {/* Box below the picture */}
            <div className="dentist-box">
              <h2 className="dentist-name">{dentist.name}</h2>
              <p className="dentist-job">{dentist.job}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />

    </div>
  );
};

export default DentistsPage;
