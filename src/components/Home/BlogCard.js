import React from 'react';
import ReactHtmlParser from "react-html-parser";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  const blogs = useSelector((state) => state.allBlogs.blogs)
    
  const renderList = blogs.map((blog) => {
      const {_id, title, Author, email, value, imageURL, date} = blog;
      return (
        <div class="bg-white border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
        <img src={imageURL} alt="" class="object-contain h-64 w-full" />
        <div class="pt-4 mb-4 text-center object-cover">
          <div class="text-2xl font-bold text-pink-700">{title}</div>
          <div class="author flex items-center -ml-3 mb-3"></div>
          <p class="text-justify px-2">
            {value ? ReactHtmlParser(value.slice(0, 300)) : ""}...
          </p>
          <div className="mt-2">
            {/* blogDetails */}
            <div class="flex items-center justify-between mx-8">
              <Link to={`/blogDetails/${_id}`}>
              <p
                class="text-blue-500 text-md -ml-3 "
                style={{ cursor: "pointer" }}
              >
                Continue Reading
              </p>
              </Link>

              <Link to={`/blogDetails/${_id}`} class="flex text-gray-700">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 text-blue-500"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </Link>
            </div>
            <div class="text-md tracking-tighter text-gray-800 flex flex-col my-auto items-center">
              Author: {Author}
              <span class="text-gray-600 ">Published: {date}</span>
            </div>
          </div>
        </div>
      </div>
      )
  })

  return <>{renderList}</>
};

export default BlogCard;