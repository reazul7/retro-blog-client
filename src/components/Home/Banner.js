import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="bg-cover bg-center h-screen text-white py-24 px-10 object-fill" style={{backgroundImage: 'url(https://cdn.branchcms.com/KdaePwA3mZ-1252/images/holifield-blogs-banner.v4.jpg)'}}>
            <div class="md:w-1/2">
            <p class="font-bold text-sm uppercase">Welcome</p>
            <p class="text-3xl font-bold">Retro Blog Page</p>
            <p class="text-2xl mb-10 leading-none">For publish your own blog contact with me</p>
            <a href="#contact" class="bg-indigo-800 py-3 px-4 text-white font-bold uppercase text-xs rounded hover:bg-gray-800">Contact us</a>
            </div>
            </div>
        </div>
    );
};

export default Banner;