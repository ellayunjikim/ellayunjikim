import React from 'react';
import Navbar from '../components/Navbar'
import systems_arch from '../assets/systems_architecture.png'
import ui from '../assets/prototype.png'
import pipeline from '../assets/pipeline.png'
import dashboard from '../assets/dashboard.png'
// import game from '../assets/project2.jpg'
import flashcard from '../assets/flashcard.gif'
import './ScrollAnimation.css'; // Create a CSS file for styling

const Projects = () => {
return (
    <div>
        <Navbar />
        <div className = "section-title"> <b className={`animated-element ${'fade-in2'}`}>Projects.</b></div>
        <div className = "project-title" >Food Delivery Logger Database</div>
        <FoodApp />
        <div id = "fni" className = "project-title"> FNI App: An expert-centered knowledge dashboard to support multidisciplinary research</div>
        <FNIApp />
        <div className = "project-title"> Quizlet 2.0 (Multiplayer Flashcard Game!)</div>
        <Quilet />
        <div className = "project-title"> College-Wide Learning Outcome Data Visualization App </div>
        <Treefluent />
    </div>
);
};    

function ImageWithText() {
    return (
      <div className="image-with-text-container">
        <img
          src={flashcard} // Replace with the path to your image
          alt="flashcardhere"
          className="project-image2"
        />
        <div className = "text">
        <p>
                A multiplayer study game for students to practice and drill set of vocabularies or concepts, programmed in C . 
                In this program, users are given the option to import a text file with a set of word-definitions (their personal flashcard set) that they are interested in practicing. 
        </p>
        <p>
            <br></br>
            <b className={`animated-element ${'fade-in2'}`}>The program will then give the user options to either: </b> 
            <li>Edit the flashcard set, </li>
            <li>Practice the game individually, </li>
            <li>Host a server to start a multiplayer game, </li>
            <li>Join a server to play a game from another host player’s flashcard set.</li>
        </p>
            </div>
      </div>
    );
  }
  

function FoodApp() {
    return (
    <div className = "project-info">
    <p>Our database application allows employees to:</p>
    <li>Search or filter user information, driver information, order information, restaurant information, menu information, and more, </li>
    <li>Add and delete data in the database conveniently through the website,</li>
    <li>Arrange data in a specific form and download or retrieve data directly via website.</li> 
    <br></br>
    This interactive application was made as a demo of a realistic application that employees of Food Delivery Application (i.e. DoorDash, Uber Eats) could utilize and facilitate any customer service conflicts or queries of their interest through their database.  
    </div>
    );
}

function Quilet()
 {
    function GithubLink() {
        const github = 'https://github.com/ellayunjikim/quizlet_2.0'; 

        return (
        <a href={github} target="_blank" rel="noopener noreferrer">
            <div className = "github">GitHub Link</div>
        </a>
        );
    }
     return (
         <div>
             <GithubLink />
            <b className = "keywords">Keywords: Multiplayer Game, Parallel Programming, Operating Systems, Threads, Networks, Distributed System, Files, C</b>
            <ImageWithText />
            <div className = "project-info">
            </div>
            </div>
     );
 }
function Treefluent() {
    function GithubLink() {
        const github = 'https://github.com/ellayunjikim/treefluent'; 

        return (
        <a href={github} target="_blank" rel="noopener noreferrer">
            <div className = "github">GitHub Link</div>
        </a>
        );
    }
    return (
        <div>
            <GithubLink />
            <b className = "keywords">Keywords: learning outcomes, interactive, tree, scatterplot, wordcloud, barchart, R, Shiny</b>
        <div className = "announcement">Nominated 1st place app by Grinnell College Career Center staff!</div>
        <div>
            <img src={dashboard} alt="Interactive Dashboard" className="project-image4" />
            <div className = "project-info">This app creates different tree-driven data visualizations using learning assessment data provided by the staff of Grinnell College Center for Careers, Life, and Services. </div>
        </div>
        <div className = "project-info">
            <b className={`animated-element ${'fade-in2'}`}>This project aimed to answer three questions:  </b>
        </div>
        <div className = "project-info">
            <li>“What is the level of student achievement of the learning outcomes over time?</li>
            <li>What phases of the assessment process are departments engaged in over time?</li>
            <li>Which learning outcomes are the most prevalent at Grinnell?</li> 
            <br></br>
            This interactive application was made for the Grinnell College assessment board and faculty to better visualize and understand information regarding the learning outcomes and students.         
        </div>
        </div>
    );
}

function FNIApp() {

    function GithubLink() {
        const github = 'https://github.com/ellayunjikim/fni_research'; 

        return (
        <a href={github} target="_blank" rel="noopener noreferrer">
            <div className = "github">GitHub Link</div>
        </a>
        );
    }

    return (
        <div>
            <GithubLink />
            <b className = "keywords">Keywords: Human-computer interaction, interactive, research, multidisciplinary, network graph, 
            Python, R, Javascript, Node.js </b>
        <div className = "content-wrapper2">
        <div className = "project-info"> Researchers often utilize academic search engines to facilitate their research. 
        However, established methods can be difficult to find researchers within new contexts and fields.</div>
        <div className = "project-info"><b className={`animated-element ${'fade-in2'}`}>What if: </b>
        <li>I need to prepare a literature review and I am new to a research area/context.</li>
        <li>I don’t know another researchers’ trajectory within this new context.</li>
        <li>I want to engage or collaborate with researchers in other disciplines.</li>
        <br></br>We created a platform that enables stakeholders to search/upload publications and visualizes scientific networks in emerging fields. 
        The authors' network displays the authors' Field Networking Index (FNI), a new classification method we created to rank scholars based on scholars’ 
        research production’s proximity to core field keywords and co-authors, providing insight into academic landscape.
        </div>
        <div className = "content-wrapper2">
        <img src={systems_arch} alt="Systems Architecture" className="project-image2" /> 
        <img src={ui} alt="Prototype Design" className="project-image3" /></div>
        </div>
        <div>
        <img src={pipeline} alt="Scriptable Bib Pipeline" className="project-image3" />
        </div>
        </div>
    );
}

export default Projects
