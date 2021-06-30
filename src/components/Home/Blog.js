import React, { useState } from "react";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://desolate-savannah-78335.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [setBlogs]);

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
        {blogs.length > 0 &&
          blogs.map((blog) => <BlogCard blog={blog}></BlogCard>)}
      </div>
    </main>
  );
}

export default Blog;
