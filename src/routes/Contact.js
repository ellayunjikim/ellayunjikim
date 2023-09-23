import React from 'react'
import Navbar from '../components/Navbar'

function EmailLink() {
  const emailAddress = 'yk3040@columbia.edu'; // Replace with the desired email address

  return (
    <a href={`mailto:${emailAddress}`}><div className = "email">yk3040@columbia.edu</div></a>
  );
}

function LinkedinLink() {
  const Linkedin = 'https://www.linkedin.com/in/ella-yunji-kim/'; // Replace with the desired email address

  return (
    <a href={Linkedin} target="_blank" rel="noopener noreferrer">
      <div className = "email"> linkedin.com/in/ella-yunji-kim/ </div>
    </a>
  );
}

const Contact = () => {
    return (
      <div>
        <Navbar />
        <div className = "section-title"> <b className={`animated-element ${'fade-in2'}`}>Contact.</b></div>
        <div className = "contact-info"><b>Feel free to contact me in any of the ways below:</b></div>
        <div className = "contact-info2">Email: </div>
        <EmailLink/>
        <div className = "contact-info2">Linkedin: </div>
        <LinkedinLink/>
      </div>
    );
};    

export default Contact
