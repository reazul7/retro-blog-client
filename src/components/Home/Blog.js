import React, { useState } from "react";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://desolate-savannah-78335.herokuapp.com/blogs")
    .then((res) => res.json())
    .then(data => setBlogs(data))
  }, [setBlogs]);


  return (
    <main class="px-3">
      <div class="text-4xl sm:text-5xl text-center my-10">My Blogs</div>
      <div class="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
        {
          blogs.length > 0 && blogs.map((blog) => (<BlogCard blog={blog}></BlogCard>))
        }
      </div>
    </main>
  );
}

export default Blog;
