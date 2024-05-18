
import React, { useState, useEffect } from 'react';
import './Home.css';  

function Home() {
    const containerStyle = {
        height: '100vh',
        width: '100%',
        backgroundImage: "url('/Images/welcome_pg.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '100px'
      };

    
    const [homeData, setHomeData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/home');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHomeData(data);
            } catch (error) {
                console.error('Fetch error:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home-container" style={containerStyle}>
            <div className='home-content'> 
                <h1>{homeData.title}</h1>
                <p>{homeData.description}</p>
                <a href='/contact' className='cta-button' Get In Touch></a>
            </div>
        </div>
    );
}

export default Home;


