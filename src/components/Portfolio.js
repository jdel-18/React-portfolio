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
import '../App.css';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Project') {
      return (
        <div>
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
      repoLink: 'https://github.com/jdel-18/first-group-project'
    },
    {
      title: 'BookTrackr',
      image: Image2,
      deployLink: 'https://bookmanagement.herokuapp.com/',
      repoLink: 'https://github.com/nhunguyen-debug/Bookmanagement-system-Group3'
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
