import React from 'react';
import Banner from './Banner';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;