import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Home/NavBar';
import './MonageBlog.css';

const ManageBlog = () => {
    const [ blog, setBlog ] = useState([]);
    const [ deleteBlog, setDeleteBlog ] = useState(false);
    useEffect(() => {
        fetch("https://desolate-savannah-78335.herokuapp.com/manageBlog")
        .then((res) => res.json())
        .then((data) => setBlog(data))
    }, [deleteBlog])

    // blog delete
    function handleBlogDelete(_id) {
        fetch(`https://desolate-savannah-78335.herokuapp.com/deleteBlog/${_id}`,
         {
             method: 'DELETE'
         }
        )
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                setDeleteBlog(true);
                alert("Blog Delete Successfully")
            }
            else {
                setDeleteBlog(false);
            }
        })
        .catch((err) => setDeleteBlog(false))
    }

    
    return (
        <div>
            <NavBar/>
            <body class="flex items-center justify-center">
                <div class="container">
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-white">
                            <tr class="bg-red-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th class="p-3 text-left">Title</th>
                                <th class="p-3 text-left">Author</th>
                                <th class="p-3 text-left">Email</th>
                                <th class="p-3 text-left">Date</th>
                                <th class="p-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="flex-1 sm:flex-none">
                            {
                                blog.map(item => (
                                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                    <td class="border-grey-light border hover:bg-gray-100 p-3">{item.title}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{item.Author}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{item.email}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{item.date}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate"><Link to={`/editBlog/${item._id}`}  type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</Link><button onClick={() => handleBlogDelete(item._id)}  type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                            </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </body>
        </div>
    );
};

export default ManageBlog;