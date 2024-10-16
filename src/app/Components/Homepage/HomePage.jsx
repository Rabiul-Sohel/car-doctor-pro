import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Banner2 from './Banner2';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default HomePage;