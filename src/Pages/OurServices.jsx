import React from 'react';
import '../Styles/Dentists.css';
import '../Styles/OurServices.css';

const ServicePage = () => {
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

 const services = [
   {
     title: 'Restorative Dentistry',
     fixes: [
       { name: 'Dental Bridges', backgroundImage: 'pictures/dentalbridge.png' },
       { name: 'Dental Filling', backgroundImage: 'pictures/dentalfilling.jpg' },
       { name: 'Dental Implants', backgroundImage: 'pictures/dentalimplant.jpg' },
       { name: 'Dentures', backgroundImage: 'pictures/dentures.jpg'},
       { name: 'Inlays and Onlays', backgroundImage:'pictures/inlaysandonlays.jpg' }
     ],
     backgroundImage: 'url(Lisa.jpg)'
   },
   {
     title: 'General Dentistry',
     fixes: [
       { name: "Check-up & Clean", backgroundImage: 'pictures/checkupandclean.jpg' },
       { name: "Children's Dentistry", backgroundImage: 'pictures/children.jpg' },
       { name: "Root Canal Therapy", backgroundImage: 'pictures/rootcanaltherapy.jpg' },
       { name: "Emergency Dentistry", backgroundImage: 'pictures/emergencydentistry.jpg' },
       { name: "TMJ Treatment", backgroundImage: 'pictures/tmjtreatment.jpg' }
     ]
   },
   {
     title: 'Cosmetic Dentistry',
     fixes: [
       { name: "Teeth Whitening", backgroundImage: 'pictures/teethwhitening.jpg' },
       { name: "Orthodontic Treatment", backgroundImage: 'pictures/orthodontictreatment.jpg' },
       { name: "Dental Veneers", backgroundImage: 'pictures/dentalveneers.jpg' },
       { name: "Braces", backgroundImage: 'pictures/braces.jpeg' },
       { name: "Dental Crowns & Veneers", backgroundImage: 'pictures/dentalcrown.png' }
     ]
   }
 ];

 return (
   <div className="dentists-page">
     <h1>Meet the Dentists at DentEase Dental Clinic</h1>
     <p className='dentist-paragraph'>Seamless Smiles, Effortless Appointments</p>
     <div className="dentists-container">
       {dentists.map((dentist, index) => (
         <div className="dentist-card" key={index}>
           <img src={dentist.imageUrl} alt={dentist.name} className="dentist-image" />
           <div className="dentist-box">
             <h2 className="dentist-name">{dentist.name}</h2>
             <p className="dentist-job">{dentist.job}</p>
           </div>
         </div>
       ))}
     </div>
     <h1>DentEase Dental Services</h1>
     <p className="Service-Paragraph">DentEase Dental Services provides personalized and compassionate dental care, ensuring a confident smile through expertise and dedication. Our professional team offers top-notch treatments in a warm, welcoming environment, enhancing your oral health and overall well-being.</p>
     <div className="Service-container">
       {services.map((service, serviceIndex) => (
         <div className="Service-Card" key={serviceIndex} >
           <h1>{service.title}</h1>
           <ul>
             {service.fixes.map((fix, index) => (
               <li
                key={index}
                className="fix-item"
                style={{
                  backgroundImage: `url(${fix.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
               >
                <div className="title-box">{fix.name}</div>
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