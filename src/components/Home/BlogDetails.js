import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedBlog } from "../.././redux/actions/blogActions";

const BlogDetails = () => {
  const blog = useSelector((state) => state.blog);
  const { id } = useParams();
  const dispatch = useDispatch();
// dispatch(selectedBlog(response.data));
  console.log("blog _Id", id);
  console.log({blog})

  const fetchBlogDetails = () => {
    const response = axios
      .get(`https://desolate-savannah-78335.herokuapp.com/blogDetails/${id}`)
      .catch((err) => {
        console.log({ err });
      });
    console.log("blogDetails", response.data)
  };

  useEffect(() => {
    if (id && id !== "") fetchBlogDetails();
  }, [id]);

  return (
    <div>
      <h1>BlogDetails</h1>
    </div>
  );
};

export default BlogDetails;