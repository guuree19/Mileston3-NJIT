import React from 'react';
import './Resume.css';
// import Nav from "./Nav";


const Resume = () => {
  return (
    <div className="resume-container">
            {/* <Nav /> */}

      <div className="resume-content">
        <h1>My Resume/CV</h1>
        <p>You can view and download my resume here:</p>
        <a
          href="./assets/Abdulaziz_Re.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download"
        >
          View/Download Resume
        </a>
      </div>
      <div className="resume-pdf-container">
        <iframe
          title="Resume PDF"
          src="/assets/Abdulaziz_Re.pdf"
          width="100%"
          height="600"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
