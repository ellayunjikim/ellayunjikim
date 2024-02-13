import React from 'react'
import Navbar from '../components/Navbar'
import resume from '../public/Resume.pdf'
import profilepic from '../assets/ellaCute.jpg'

const About = () => {
    return (
        <div>
        <Navbar />
        <AboutContent />
        </div>
    );
};    

function AboutContent() {
    return (
        <div>
            <div className = "section-title"> <b className={`animated-element ${'fade-in2'}`}>About.</b></div>
            <div class="about-section">
              <div class="about-image">
                  <img src = {profilepic} alt="About Me"></img>
              </div>
              <div class="about-me">
                  <p className = "subhello">
                    Hi! My name is Ella, and I am currently a Master's student in Computer Science at Columbia University. 
                    I've always enjoyed solving problems, but never had the exposure to coding until undergrad. 
                    At Grinnell College, I began my journey in CS and fell in love with it.I've recently been interested in ML techniques on privacy, and am studying/researching this on my own time. We'll see what I can come up with this semester.
                  </p>
                  <br></br>
                  <p className = "subhello">
                    Outside of academics, I love to dance. I am a member of CU Generation, a hip hop dance team at Columbia University. We perform at the college in various showcases and events. You can watch one here:<br></br>
                    <div className="video-container">
                      <iframe
                        src= "https://www.youtube.com/embed/Kq4N0n-Fzy8"
                        title="CU Gen 2023 Night Market Performance"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                      </iframe>
                      CU Gen 2023 Night Market Performance
                      </div>
                     <br></br><br></br>
                  I've also been in exciting dance projects like this:<br></br>
                  <div className="video-container">
                      <iframe
                        src= "https://www.youtube.com/embed/l52TEcWKqXU"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                      </iframe>
                      Seventeen "Super" Performance K-pop Cover [2023]
                     </div>
                     <br></br>
                     <a href="https://www.instagram.com/tv/CJBI1r6pv7T/?igsh=MWsxY3lqczFhMHJmMw==" class = "link" target="_blank" rel="noopener noreferrer">Modern Dance Project [2020]</a>
                  </p>
              </div>
            </div>
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
