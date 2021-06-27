import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import AddBlog from "./components/Admin/AddBlog";
import Login from "./components/Shared/Login/Login";
import { createContext, useEffect } from "react";
import { useState } from "react";
import AddAdmin from "./components/Admin/AddAdmin";
import Sidebar from "./components/Shared/Sidebar/Sidebar";
import PrivateRoute from "./components/Shared/Login/PrivateRoute";
import BlogDetails from "./components/Home/BlogDetails";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  console.log(loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/addBlog">
                <AddBlog />
              </PrivateRoute>
              <Route path="/addAdmin">
                <AddAdmin />
              </Route>
              <Route path="/dashboard">
                <Sidebar />
              </Route>

          {/* {loggedInUser.rule === "admin" && (
            <>
              <PrivateRoute path="/addBlog">
                <AddBlog />
              </PrivateRoute>
              <Route path="/addAdmin">
                <AddAdmin />
              </Route>
              <Route path="/dashboard">
                <Sidebar />
              </Route>
            </>
          )} */}

          <Route path="/blogDetails/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
