import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Card from '../Card';
import Footer from '../Footer';
import Countries from '../../services/footballApi';

function Home() {
    return (
        <>
            <HeroSection />
            <Card />
            <Footer />
        </>
    )
}

export default Home;