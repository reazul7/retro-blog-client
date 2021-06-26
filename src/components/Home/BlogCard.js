import React from "react";

const BlogCard = ({blog}) => {
  const { _id, title, Author, email, value, imageURL, date } = blog;
  return (
    <div class="bg-white border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <img src={imageURL} alt="" class="w-full h-48 sm:h-56 object-cover" />

      <div class="pt-6 mb-10 text-center object-cover">
        <div class="text-2xl font-bold text-purple-500 mb-4">{title}</div>
        <p class="text-justify">{value}.slice(1,10) </p>
        <div className="mt-4">
          <div class="flex items-center justify-between mt-2 mx-6">
            <a href="#" class="text-blue-500 text-md -ml-3 ">
              Show More
            </a>
            <a href="#" class="flex text-gray-700">
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
              5
            </a>
          </div>

          <div class="author flex items-center -ml-3 my-3">
            <div class="user-logo">
              <img
                class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />
            </div>
            <h2 class="text-sm tracking-tighter text-gray-900">
              <a href="/">By Mohammed Ibrahim</a>{" "}
              <span class="text-gray-600">21 SEP 2015.</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
