import React from 'react'
import Navbar from '../components/Navbar'
import resume from '../public/Resume.pdf'

const About = () => {
    return (
        <div>
        <Navbar />
        <AboutContent />
        <Resume />
        </div>
    );
};    

function AboutContent() {
    return (
        <div>
            <div className = "section-title"> <b className={`animated-element ${'fade-in2'}`}>About.</b></div>

        </div>
    );
}

function Resume() {
    const pdfUrl = process.env.PUBLIC_URL + resume; // Path to your PDF file
  
    return (
      <div>
        <div className = "title">(My Resume) </div>
      </div>
    );
  }


export default About
