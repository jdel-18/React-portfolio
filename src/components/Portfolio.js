import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Image1 from '../components/images/avengers.png';
import Image2 from '../components/images/booktrkr.png';
import Image3 from '../components/images/Readme.png';
import Image4 from '../components/images/JateScreenshot.png';
import Image5 from '../components/images/Ecommerce.png';
import Image6 from '../components/images/SQLapi.png';
import '../App.css';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Project') {
      return (
        <div className="project-container">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              deployLink={project.deployLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      );
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };
  
  

  const handlePageChange = (page) => setCurrentPage(page);

  const projects = [
    {
      title: 'Marvels FIGs, Assemble!',
      image: Image1,
      deployLink: 'https://jdel-18.github.io/first-group-project/',
    },
    {
      title: 'BookTrackr',
      image: Image2,
      deployLink: 'https://bookmanagement.herokuapp.com/',
    },
    {
      title: 'README Generator',
      image: Image3,
      repoLink: 'https://github.com/jdel-18/Auto-README-generator'
    },
    {
      title: 'E Commerce Back End',
      image: Image5,
      repoLink: 'https://github.com/jdel-18/Challenge-E-commerce-mapping'
    },
    {
      title: 'SQL network api',
      image: Image6,
      repoLink: 'https://github.com/jdel-18/SQL-network-api'
    },
    {
      title: 'J.A.T.E. (Just Another Text Editor)',
      image: Image4,
      deployLink: 'https://whispering-cove-04575-c4c9149efb4f.herokuapp.com/'
    },
  ];

  return (
    <div>
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
