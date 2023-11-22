import React from 'react';
import '../Styles/OurServices.css';

const services = [
  {
   title: 'Restorative Dentistry',
   fixes: [
     { name: 'Dental Bridges',  backgroundImage: 'pictures/aisha.jpg' },
     { name: 'Dental Filling',  backgroundImage: 'pictures/aisha.jpg' },
     { name: 'Dental Implants', backgroundImage: 'pictures/aisha.jpg' },
     { name: 'Dentures', backgroundImage: 'pictures/aisha.jpg'},
     { name: 'Inlays and Onlays', backgroundImage:'pictures/aisha.jpg' }
   ],
   backgroundImage: 'url(Lisa.jpg)'
  },
  {
    title: 'General Dentistry',
    fixes: [
      { name: "Check-up & Clean", backgroundImage: 'pictures/aisha.jpg' },
      { name: "Children's Dentistry", backgroundImage: 'pictures/aisha.jpg' },
      { name: "Root Canal Therapy", backgroundImage: 'pictures/aisha.jpg' },
      { name: "Emergency Dentistry", backgroundImage: 'pictures/aisha.jpg' },
      { name: "TMJ Treatment", backgroundImage: 'pictures/aisha.jpg' }
    ]
  },
  {
    title: 'Cosmetic Dentistry',
    fixes: [
      { name: "Teeth Whitening", backgroundImage: 'pictures/aisha.jpg' },
      { name: "Orthodontic Treatment", backgroundImage: 'pictures/aisha.jpg' },
      { name: "Dental Veneers", backgroundImage: 'pictures/aisha.jpg' },
      { name: "Braces", backgroundImage: 'pictures/aisha.jpg' },
      { name: "Dental Crowns & Veneers'", backgroundImage: 'pictures/aisha.jpg' }
    ]
  }
  
];

const ServicePage = () => {
  return (
    <div className="Service-page">
        <h1>DentEase Dental Services</h1>
        <p className="Service-Paragraph">DentEase Dental Services provides personalized and compassionate dental care, ensuring a confident smile through expertise and dedication. Our professional team offers top-notch treatments in a warm, welcoming environment, enhancing your oral health and overall well-being.</p>
      <div className="Service-container">
        {services.map((service, serviceIndex) => (
          <div className="Service-Card" key={serviceIndex} style={{ backgroundImage: service.backgroundImage }}>
            <h1>{service.title}</h1>
            <ul>
              {service.fixes.map((fix, index) => (
                <li 
                key={index} 
                className="fix-item" 
                style={{ 
                  backgroundImage: `url(${fix.backgroundImage})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
               >
                {fix.name}
               </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
