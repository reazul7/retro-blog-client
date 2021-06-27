import React, { useEffect } from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {
    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(data =>{
            console.log(data);
        })
        .catch((error) =>{
            console.log(error);
        })
    },[])

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