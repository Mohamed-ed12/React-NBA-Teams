import React from 'react';
import backgroundImg from '../assets/Background_image_about.jpg';
import profileImg from '../assets/profile.jpeg';
import nbafileImg from '../assets/NBA-profile.png';

const AboutPage = () => {
  return (
    <div className="about-page-container position-relative" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh', perspective: '1000px' }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 mb-5 d-flex flex-column align-items-start" style={{ transform: 'rotateY(10deg)' }}>
            <div className="profile-image-container text-center mb-3">
              <img src={profileImg} alt="Profile" className="profile-image img-fluid rounded-circle shadow-lg" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="about-content text-light text-left">
              <h2 className="display-5 mb-4">About Me</h2>
              <p className="lead">
                Hello, I'm Mohamed Edghim, a software engineer currently studying at
                Ariel University. With a passion for technology and innovation, I'm
                dedicated to leveraging my skills and knowledge to develop impactful
                solutions and contribute to the world of software engineering.
              </p>
            </div>
          </div>
          <div className="col-md-5 offset-md-2 mb-5 d-flex flex-column align-items-start nba-profile-column" style={{ marginLeft: 'auto', marginTop: '110px', transform: 'rotateY(-10deg)' }}>
            <div className="profile-image-container text-center mb-3">
              <img src={nbafileImg} alt="NBA Profile" className="profile-image img-fluid rounded-circle shadow-lg" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="about-content text-light text-left">
              <h2 className="display-5 mb-4">About NBA</h2>
              <p className="lead">
                This website focuses on basketball content, particularly the NBA, for
                several reasons. Basketball is not just a sport; it's a global
                phenomenon that transcends boundaries and brings people together. The
                NBA, as the premier basketball league in the world, showcases
                exceptional talent, fierce competition, and inspiring stories that
                resonate with fans worldwide. By highlighting basketball content, we aim
                to celebrate the spirit of teamwork, perseverance, and excellence that
                defines the sport and inspires individuals to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
