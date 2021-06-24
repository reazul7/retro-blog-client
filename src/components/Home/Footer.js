import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10 ">
            <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                {/* col-1 */}
                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* Col Title */}
                    <div class="text-xs uppercase text-gray-400 font-medium mb-6">Blog</div>
                    {/* Links */}
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Create New Blog</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Share Your Blog</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Upgrade Guide</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Engage Your Audience</a>
                </div>

                {/* col-2 */}
                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* Col Title */}
                    <div class="text-xs uppercase text-gray-400 font-medium mb-6">Website</div>
                    {/* Links */}
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">About</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Support</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">FAQ</a>
                </div>

                {/* col-3 */}
                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* Col Title */}
                    <div class="text-xs uppercase text-gray-400 font-medium mb-6">Resources</div>
                    {/* Links */}
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">eBooks</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Whitepapers</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Comparison Guide</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Website Grader</a>
                </div>

                {/* col-4 */}
                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* Col Title */}
                    <div class="text-xs uppercase text-gray-400 font-medium mb-6">Get Help</div>
                    {/* Links */}
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Help Center</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Contact With Me</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Privacy Policy</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Using with Preprocessor</a>
                    <a href="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Terms</a>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="pt-2">
                <div class="flex justify-center pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 flex-col md:flex-row max-w-6xl">
                    <div className="mt-2 md:pl-44 text-md">&copy; Copyright {(new Date()).getFullYear()}-year. All Rights Reserved.</div>

                    {/* Unicons */}
                    <div class="text-lg flex-auto flex-row-reverse mt-2 flex-row flex justify-center">
                        <a href="/" class="w-6 mx-1">
                            <i class="uil uil-facebook-f"></i>
                        </a>
                        <a href="/" class="w-6 mx-1">
                            <i class="uil uil-twitter-alt"></i>
                        </a>
                        <a href="/" class="w-6 mx-1">
                            <i class="uil uil-youtube"></i>
                        </a>
                        <a href="/" class="w-6 mx-1">
                            <i class="uil uil-linkedin"></i>
                        </a>
                        <a href="/" class="w-6 mx-1">
                            <i class="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;