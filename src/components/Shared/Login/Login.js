import React, { useContext } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import { useState } from "react";

import { useHistory, useLocation } from "react-router";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../../App";
import { FcGoogle } from "react-icons/fc";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    displayName: "",
    email: "",
    photoURL: "",
    name: "",
    password: "",
    confirm_password: "",
    error: "",
    success: false,
  });
  // console.log(user);

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      isFieldValid = /.{6,}/.test(
        event.target.value
      );
    }
    if (event.target.name === "confirm_password") {
      isFieldValid = /.{6,}/.test(
        event.target.value
      );
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password === user.confirm_password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const errorMessage = "";
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = true;
          setUser(newUserInfo);
          // console.log(errorMessage);
          // console.log(user.name);
          updateUserName(user.name);

          setLoggedInUser(newUserInfo);
          history.push('/login');
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
          console.log(errorMessage);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const errorMessage = "";
          const newUserInfo = { ...user };

          newUserInfo.error = errorMessage;
          newUserInfo.success = true;

          isAdmin(user.email).then((result) => {
            newUserInfo.rule = "user";
            if (result) newUserInfo.rule = "admin";
            // console.log(newUserInfo);
            setUser(newUserInfo);
            // console.log("sign in user info ", res.user);
            setLoggedInUser(newUserInfo);
            history.replace(from);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
          console.log(errorMessage);
        });
    }
    e.preventDefault();
  };
  // update user info   => name send to the firebase
  const updateUserName = (name) => {
    console.log(name);
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("Update successful.");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // console.log(user.displayName);

  // for google signIn
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        // console.log(res);
        // console.log(res[0]);
        const { displayName, email, photoURL } = res.user;
        // console.log(displayName, email, photoURL);
        isAdmin(email).then((result) => {
          let rule = "user";
          if (result) rule = "admin";
          const signedInUser = {
            isSignedIn: true,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            rule,
          };
          setUser(signedInUser);
          setLoggedInUser(signedInUser);
          history.replace(from);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isAdmin = async (email) => {
    const response = await fetch(
      "https://desolate-savannah-78335.herokuapp.com/isAdmin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    return await response.json();
  };
  // console.log(user);

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
                <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">{newUser ? <div>Register For An Account</div> : <div>Login To Your Account</div>}</div>
                    <button onClick={googleSignIn} type="button" class="relative mt-6 border rounded-md py-2 text-md text-gray-800 bg-gray-100 hover:bg-gray-200">
                        <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><FcGoogle/></span>
                        <span>Login with Google</span>
                    </button>
                    <div class="relative mt-10 h-px bg-gray-300">
                        <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                            <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
                        </div>
                    </div>

                    <div class="mt-10">
                        <form action="#">
                            {newUser && (
                                <div class="flex flex-col mb-6">
                                    <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Full Name:</label>
                                    <div class="relative">
                                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>                            
                                        <input onBlur={handleBlur} type="text" name="name" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Write Your Name" required/>
                                    </div>
                            </div>
                            )}

                            <div class="flex flex-col mb-6">
                                <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                                <div class="relative">
                                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <input onBlur={handleBlur} type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Write Your E-Mail Address" required/>
                                </div>
                            </div>

                            <div class="flex flex-col mb-6">
                                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                                <div class="relative">
                                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <span>
                                            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input onBlur={handleBlur} id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" required/>
                                </div>
                            </div>

                            {newUser && (
                                <div class="flex flex-col mb-6">
                                    <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Confirm Password:</label>
                                    <div class="relative">
                                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                            <span>
                                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </span>
                                        </div>                            
                                        <input onBlur={handleBlur} type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Re-type your Password" required/>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>


                    <div class="flex w-full">
                        <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                            <span class="mr-2 uppercase">{newUser ? "Sign up" : "Log In"}</span>
                            <span>
                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div class="flex justify-center items-center mt-6">
                        <button onClick={() => setNewUser(!newUser)} name="newUser" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                            <span>
                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </span>
                            <span class="ml-2">{newUser ? "Already have an account. Login Now?" : "You don't have an account. Create Now?"}{" "}</span>
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    </div>
  );
}

export default Login;
