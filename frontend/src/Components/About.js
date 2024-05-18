import React, { useState, useEffect } from 'react';
import "./About.css";
// import Nav from "./Nav";

function About() {
  const containerStyle = {
    height: '100vh',
    width: '100%',
    backgroundImage: "url('/Images/about_pg.png')",
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    paddingTop: '100px'
  };


  const dataExpertiseStyle = {
    height: '100vh',
    width: '100%',
    backgroundImage: "url('/Images/about_data.png')",
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    paddingTop: '350px'
  };

  const [aboutData, setAboutData] = useState({});

    useEffect(() => {
        fetch('http://localhost:5001/api/about')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setAboutData(data))
            .catch(error => console.error('Error fetching about data:', error));
    }, []);


  // This component renders the "About me" page
  return (
    <div style={{ width: '100%' }}>  {/* Ensure this container does not apply any undesired styles */}

      <div className="about_page" style={containerStyle}>
        {/* <Nav />  */}
        <h1>About me</h1>
        <div className="data_expertise" style={dataExpertiseStyle}>
            <h1>{aboutData.title}</h1>
            <div>{aboutData.content}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
