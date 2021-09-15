import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogCardNew = () => {
    const blogs = useSelector((state) => state.allBlogs.blogs)
    
    const renderList = blogs.map((blog) => {
        const {_id, title, Author, email, value, imageURL, date} = blog;
        return (
            <div className="card" key={_id}>
                <Link to={`/blog/${_id}`}>
                <p>{_id}</p>
                <p>{title}</p>
                <p>{email}</p>
                <p>{Author}</p>
                <p>{date}</p>
                </Link>
            </div>
        )
    })

    return <>{renderList}</>
};

export default BlogCardNew;