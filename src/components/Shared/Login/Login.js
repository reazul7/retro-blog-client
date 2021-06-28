import React, { useContext } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import { useState } from "react";

import { useHistory, useLocation } from "react-router";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../../App";

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
      isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(
        event.target.value
      );
    }
    if (event.target.name === "confirm_password") {
      isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(
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
          history.replace(from);
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

    // const isAdmin = (email) => {
    //   return fetch("https://desolate-savannah-78335.herokuapp.com/isAdmin", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => data)
    //     .catch((err) => {
    //       console.log("check admin fetch url error", err);
    //     });
    // };

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
          console.log(newUserInfo);
          setUser(newUserInfo);
          console.log("sign in user info ", res.user);
          setLoggedInUser(newUserInfo);
          history.replace(from);
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
  // update user info   => name ke firebase patanu
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
        console.log(res[0]);
        const { displayName, email, photoURL } = res.user;
        // console.log(displayName, email, photoURL);

        const signedInUser = {
          isSignedIn: true,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(user);

  return (
    <div class="container">
      <div class="row g-3">
        <Form onSubmit={handleSubmit}>
          <h1 class="mt-5">
            {newUser ? <h5>create an account</h5> : <h5>Log In</h5>}
          </h1>{" "}
          <br />
          <div>
            {newUser && (
              <div class="mb-3 col-md-4">
                <label for="name" class="form-label">
                  Your name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  required
                />
              </div>
            )}
          </div>
          <div class="mb-3 col-md-4">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              onBlur={handleBlur}
              placeholder="your email"
              required
            />
          </div>
          <div class="mb-3 col-md-4">
            <label for="password" class="form-label">
              password
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              onBlur={handleBlur}
              placeholder="password"
              required
            />
          </div>
          {newUser && (
            <div class="mb-3 col-md-4">
              <label for="password" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                name="confirm_password"
                onBlur={handleBlur}
                placeholder="confirm_password"
                required
              />
            </div>
          )}
          <Button type="submit">{newUser ? "Sign up" : "Log In"}</Button>
          <Form.Group>
            <label htmlFor="newUser">
              {newUser
                ? "Already have an account ?"
                : "Don't Have an Account ?"}{" "}
            </label>
            <button
              style={{
                background: "none",
                color: "red",
                outline: "none",
                border: "none",
                textDecoration: "underline",
                fontSize: "20px",
              }}
              onClick={() => setNewUser(!newUser)}
              name="newUser"
            >
              {newUser ? "signIn" : "create an account"}
            </button>
          </Form.Group>
          <Form.Group>
            <button
              onClick={googleSignIn}
              type="button"
              class="btn btn-outline-success mt-5"
            >
              {/* <FontAwesomeIcon icon={''} /> */}
              <span class="p-4">Continue with Google</span>
            </button>
          </Form.Group>
        </Form>
      </div>

      {user.success ? (
        <h2 style={{ color: "green" }}>
          {" "}
          user {newUser ? "created" : "logged In"} successfully
        </h2>
      ) : (
        <h5 style={{ color: "red" }}> {user.error}</h5>
      )}
    </div>
  );
}

export default Login;
