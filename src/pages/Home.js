import React from 'react';
import Navbar from '../components/navBar/navBar';
import FrontHero from '../components/frontHero/frontHero';
import '../styles/style.css'


function Home() {
    return (
        <div>
            <Navbar />
            <FrontHero />
        </div>
    )
}


export default Home;