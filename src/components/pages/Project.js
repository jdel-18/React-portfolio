import React from 'react';

const Project = ({ title, image, deployLink, repoLink }) => {
  const openRepoLink = () => {
    window.open(repoLink, '_blank');
  };

  return (
    <div className="project" onClick={openRepoLink}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployLink} target="_blank" rel="noopener noreferrer">
        Deployed App
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
        GitHub Repository
      </a>
    </div>
  );
};

export default Project;
