import React from 'react';
import { Container } from 'react-bootstrap';
import ContactMe from '../../components/ContactMe/ContactMe';
import Education from '../../components/Education/Education';
import Footer from '../../components/Footer/Footer';
import HelloWord from '../../components/HelloWord/HelloWord';
import HeroSection from '../../components/HeroSection/HeroSection';
import NavBar from '../../components/NavBar/NavBar';
import Projects from '../../components/Projects/Projects';

const HomePage = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <HeroSection />
                <HelloWord />
                <Education />
                <Projects />
                <ContactMe/>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;