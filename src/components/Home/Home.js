import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;