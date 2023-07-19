import React from 'react';
import ProfileImage from '../images/me.jpeg';


export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className='title'>About me!</h1>
      <img src={ProfileImage} alt="Profile" />
      <p>
        Hi! My name is Josh Delves, and I am from Ciudad Del Carmen, Mexico. After living in Houston, TX, for 12 years,
        I moved to Southeast Asia. I spent 3 years in Singapore and 2 years in Malaysia, where I graduated high school early.
        After finishing high school, I moved to Gunnison, Colorado, and did a year of college there before I decided that it wasn’t for me at the time.
        So I spent the next four years there working many jobs, such as landscaping, being a lift operator at a ski resort, and mixing concrete for high-quality sculptures and climbing walls.
        Hobbies I had while I lived in Colorado were snowboarding, skateboarding, and going on bike rides around the mountain trails.
        Now I’ve moved back to Houston, Texas, and am currently taking a coding bootcamp with Rice University, trying to advance myself and get a career in the tech field.
      </p>
    </div>
  );
}
