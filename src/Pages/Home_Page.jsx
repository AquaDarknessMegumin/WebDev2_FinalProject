import React, { useState, useEffect } from 'react';
import '../Styles/Home_Page.css';

const Homepage = () => {
  const images = [
    'https://cdn.discordapp.com/attachments/698869917235019828/1179515281035505895/Dentist_2.jpg?ex=657a1035&is=65679b35&hm=f752e3cc628f9923c1b3f072a5b56f934cef85d17c2e47438eac5a5a22b97afe&',
    'https://cdn.discordapp.com/attachments/698869917235019828/1179515281354268752/Dentist_3.jpg?ex=657a1035&is=65679b35&hm=462da9e6c71da59b8118564317d9c0f9ce0b21f512e908a14ed9e15a63df2aae&',
    'https://media.discordapp.net/attachments/698869917235019828/1179515281748545587/Dentist_1.jpeg?ex=657a1035&is=65679b35&hm=3f492272c51c067cd2409217cc87c501849548ba40f07f5a4ed0bc95c930015c&=&format=webp&width=1333&height=889',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(1); 




  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="HomePage-container">
      {/* Top Section */}
      <div className="homepage-carousel-container">
        <div className="homepage-text-container">
          <h2>Lorem Ipsum</h2>
          <p>
            There are many variations of pas of Lorem Ipsum availab. There are many variations of pas
            of Lorem Ipsum availab.
          </p>
        </div>
        <div className="homepage-image-container">
          <img
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="homepage-carousel-image"
          />
        </div>
      </div>
{/* Facilities Section */}
      <div className="facilities">
        <div className="facilities-text-wrapper">
          <h1 className="facilities-text">OUR SERVICES</h1>
          <p className="facilities-text">What Facilities We Provided</p>
        </div>
        <div className="facility-boxes">
          <div className="facility-box left-box">
            <img
              src="https://cdn.discordapp.com/attachments/698869917235019828/1179535127076945961/endo.jpg?ex=657a22b0&is=6567adb0&hm=245fc467d292f73338e45ba61bb6a4f63da2eeaa7dfebb8b39bbdf56629f4387&" // Add the URL to your image
              alt="Orthodontist Image"
              className="facility-image"
            />
            <h3>Orthodontist</h3>
            <p>
              Correct misalignments seamlessly with our specialized facility. Equipped with cutting-edge tools, X-ray, and 3D imaging for precise treatment plans. Our space ensures a comfortable fit for braces, retainers, and aligners. Your journey to a straighter smile starts here.
            </p>
          </div>
          <div className="facility-box middle-box">
            <img
              src="https://cdn.discordapp.com/attachments/698869917235019828/1179534932062777465/orthodontist.jpg?ex=657a2282&is=6567ad82&hm=6268a0bbedb45677a8cb4e7d45ae34271028e0892723614035d622d9329c76e2&" // Add the URL to your image
              alt="Periodontist Image"
              className="facility-image"
            />
            <h3>Periodontist</h3>
            <p>
              Experience comprehensive care in our periodontal facility. Specialized tools for deep cleanings, scaling, and root planing procedures ensure optimal gum health. Our advanced equipment diagnoses and monitors gum conditions with precision. Collaborative efforts with general dentists guarantee your overall oral health. Your journey to healthy gums begins with us.
            </p>
          </div>
          <div className="facility-box right-box">
            <img
              src="https://cdn.discordapp.com/attachments/698869917235019828/1179534643364642836/periodontist.jpg?ex=657a223d&is=6567ad3d&hm=ef014f20b0c9b23dd370919ec9bbbd5e0df03fb5611583fad2492b98a9342cc0&" // Add the URL to your image
              alt="Endodontist Image"
              className="facility-image"
            />
            <h3>Endodontist</h3>
            <p>
              Discover top-tier care in our specialized facility. Treatment rooms feature advanced imaging for precise root issue diagnosis. Specialized instruments ensure expert root canal treatments and procedures. Our commitment to a sterile environment safeguards against infections, providing a secure haven for delicate procedures. Entrust your root health to our expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
