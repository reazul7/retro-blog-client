import React from 'react';
import Banner from './Banner';
import Card from './Card';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Card/>
        </div>
    );
};

export default Home;