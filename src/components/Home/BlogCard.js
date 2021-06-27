import React from "react";
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from "react-router";

const BlogCard = ({blog}) => {
  const { _id, title, Author, email, value, imageURL, date } = blog;
  let history = useHistory();
  const readBlog = (id) => {
    history.push(`/blogDetails/${id}`);
  }
  return (
    <div class="bg-white border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <img src={imageURL}  alt=""class="w-full h-48 sm:h-56 object-cover" />
      <div class="pt-6 mb-10 text-center object-cover">
        <div class="text-2xl font-bold text-purple-500 mb-4">{title}</div>
        <div class="author flex items-center -ml-3 my-3">
        <div class="text-sm   tracking-tighter text-gray-900 flex flex-col my-auto items-center">
          <a href="/">Reazul Islam</a>
          <span class="text-gray-600 ">26 Jun 2021</span>
        </div>
        </div>
        <p class="text-justify">{ value ?  ReactHtmlParser(value.slice(0,200)) : ""}...</p>
        <div className="mt-4">
          <div class="flex items-center justify-between mt-2 mx-6">
            <p class="text-blue-500 text-md -ml-3 " onClick={()=> readBlog(_id)} style={{cursor:"pointer"}}>Continue Reading</p>
            <a href="#" class="flex text-gray-700">
              <svg 
                fill="none" 
                viewBox="0 0 24 24" 
                class="w-6 h-6 text-blue-500" 
                stroke="currentColor">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
