import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const BlogDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [blogDetails, setBlogDetails] = useState([]);
  useEffect(() => {
    fetch(`https://desolate-savannah-78335.herokuapp.com/blogDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);

  const { _id, title, Author, email, value, imageURL, date } = blogDetails;

  return (
    <div class="max-w-screen-lg mx-auto">
      <div class="mt-10">
        <div class="mb-4 md:mb-0 w-full mx-auto relative">
          <div class="px-4 lg:px-0">
            <h2 class="text-4xl font-semiBold text-gray-800 leading-tight flex flex-col my-auto items-center mb-2">
              {title}
            </h2>
          </div>
          <div class="text-md tracking-tighter text-gray-800 flex flex-col my-auto items-center mb-4">
            Author: {Author}
            <span class="text-gray-600 ">Published: {date}</span>
          </div>
          <img src={imageURL} class="object-contain h-80 w-full" />
        </div>

        <div class="flex flex-col lg:flex-row lg:space-x-12">
          <div class="px-4 lg:px-0 mt-8 text-gray-700 text-lg w-full text-justify">
            {ReactHtmlParser(value)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
