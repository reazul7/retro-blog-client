import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import NavBar from "../Home/NavBar";

function AddAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const onSubmit = (data, e) => {
    console.log(data);
    fetch("https://desolate-savannah-78335.herokuapp.com/makeAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        data && alert("Admin added successfully");
        e.target.reset();
      });
  };
  return (
    <div>
      <NavBar/>
      <h1 className="text-center pt-20 pb-12 text-2xl font-bold text-gray-500">
        Want to make a user an admin by email?
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        class="max-w-sm bg-gray-100 px-3 py-5 rounded shadow-lg my-10 m-auto"
      >
        <div class="flex flex-col space-y-3">
          {/* email field */}
          <div class="flex items-center bg-white border border-gray-100 rounded px-2">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="h-6 text-gray-500 m-0 mr-1"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <input
              name="email"
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              class="w-full py-2 px-1 placeholder-indigo-400 outline-none placeholder-opacity-50"
              autocomplete="off"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          {/* password field */}
          <div class="flex items-center bg-white border border-gray-100 rounded px-2">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              class="h-6 text-gray-500 m-0 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <input
              name="password"
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              class="w-full py-2 px-1 placeholder-indigo-400 outline-none placeholder-opacity-50"
              autocomplete="off"
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <button
            type="submit"
            class="text-white bg-indigo-500 px-4 py-2 rounded"
          >
            Make as Admin
          </button>
        </div>
      </form>
      <div className="text-center">
        <button
          onClick={() => history.goBack()}
          class="border text-center border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default AddAdmin;
