import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ContactMe from '../../components/ContactMe/ContactMe';
import Education from '../../components/Education/Education';
import Footer from '../../components/Footer/Footer';
import HelloWord from '../../components/HelloWord/HelloWord';
import HeroSection from '../../components/HeroSection/HeroSection';
import NavBar from '../../components/NavBar/NavBar';
import Projects from '../../components/Projects/Projects';
import projectData from "../../projectData"
const HomePage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        setProject(projectData)
    }, [])
    console.log(projects)
    return (
        <div>
            <NavBar />
            <main className="mt-2">
                <HeroSection />
                <HelloWord />
                <Education />
                <Projects projects={projects} />
                <ContactMe/>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;