import React from 'react';
import Banner from './Banner';
import Card from './Card';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Card/>
            <Footer/>
        </div>
    );
};

export default Home;