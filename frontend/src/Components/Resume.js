import React from 'react';
import Nav from './Nav';

const Resume = () => {
  return (
    <div>
      <Nav />
      <h1>My Resume/CV</h1>
      <p>You can download my resume here:</p>
      <a href="/path/to/https://mail.google.com/mail/u/0/#inbox?projector=1" download>Download Resume</a>
    </div>
  );
};

export default Resume;
