import React, { useEffect } from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {
    useEffect(() => {
        fetch('https://desolate-savannah-78335.herokuapp.com/')
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