import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedBlog, removeSelectedBlog } from "../.././redux/actions/blogActions";
import NavBar from "./NavBar";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  console.log("Blog-Details", blog)
  console.log("Blog-Details-id", id)
  const { _id, title, Author, email, value, imageURL, date } = blog;
  
  

  const fetchBlogDetails = async () => {
    const response = await axios
      .get(`https://desolate-savannah-78335.herokuapp.com/blogDetails/${id}`)
      .catch((err) => {
        console.log({ err });
      });
      dispatch(selectedBlog(response.data[0]));
  };

  useEffect(() => {
    if (id && id !== "") fetchBlogDetails();
    return () => {
      dispatch(removeSelectedBlog());
    }
  }, [id]);

  

  return (
    <div>
      <NavBar />
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
    </div>
  );
};

export default BlogDetails;