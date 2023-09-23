import React from 'react';
import './styles.css';
import Navbar from "../components/Navbar"
import ellaProfile from '../assets/ellaProfile.jpg'; 
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import "@fontsource/raleway"; // Defaults to weight 400
import "@fontsource/raleway/400.css"; // Specify weight
import "@fontsource/raleway/400-italic.css"; // Specify weight and style
import { useNavigate } from 'react-router-dom';

const Home = () => {
    return (
        <div classname = "app-container">
            <Navbar />
            <HomeContent />
        </div>
    )
}

const ImageHover = () => {
  return (
    <div className="image-container">
      <img src={ellaProfile} alt="Ella 1" className="profile-image" />
    </div>
  );
};

const ProjectImages = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <div>
    <div className="image-container">
      <img onClick={handleClick} src={project1} alt= "Project 1" className="project-image" />
      <img onClick={handleClick} src={project2} alt= "Project 2" className="project-image" />
      <img onClick={handleClick} src={project3} alt= "Project 3" className="project-image" />
    </div>
    </div>
  )
}

function HomeContent() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects');
  };
  const handleClick2 = () => {
    navigate('/about');
  };

    return (
      <div>
        <div className = "intro">
            <div className = "content-wrapper">
                <ImageHover />
                <div className = "intro-text">
                    <p className = "hello"><b>Hello, my name is Ella.</b></p>
                    <p className = "subhello">I aspire to leverage technology to foster <b className={`animated-element ${'fade-in'}`}>effective communication </b> <br></br>and enhance <b className={`animated-element ${'fade-in'}`}>human interactions.</b></p>
                    <br></br>
                    <p className = "currently">I am: </p>
                    <ul> 
                    <li className="description"> studying Computer Science at Columbia University with a concentration in Machine Learning. </li>
                    <li className="description"> actively seeking an Engineering Intern position for the Summer of 2024.</li>
                    <li className="description"> interested in using the synergy of ML and HCI research to better the translation and communication between humans and technology. </li>
                    </ul>
                    <button onClick={handleClick2} className = "project-button"> Find my Resume Here! </button>
                </div>
            </div>
            <div className = "projects">
            <button onClick={handleClick} className = "project-button">Recent Projects</button>
              <br></br>
              <ProjectImages />
            </div>
        </div>
      </div>
    );
}

export default Home
