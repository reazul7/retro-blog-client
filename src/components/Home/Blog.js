import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../redux/actions/blogActions";

const Blog = () => {
  const blogs = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchBlogs = async () => {
    const response = await axios
      .get("https://desolate-savannah-78335.herokuapp.com/blogs")
      .catch((err) => {
        console.log({ err });
      });
    dispatch(setBlogs(response.data));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // console.log({blogs});

  return (
    <main class="px-2">
      <div class="my-10 flex flex-col items-center">
        <p class="font-bold text-3xl m-16 relative w-max">
          <span class="px-1">My Blogs</span>
          <span
            class="absolute left-0 -bottom-1 w-full h-1 transition-all bg-yellow-400"
            style={{ zIndex: "-9" }}
          ></span>
        </p>
      </div>
      <div></div>
      <div class="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
        <BlogCard />
      </div>
    </main>
  );
};

export default Blog;
