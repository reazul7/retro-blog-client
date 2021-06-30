import React, { useContext } from "react";
import {
  faAddressBook,
  faCog,
  faHome,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-3 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link className="text-brand text-decoration-none" to="/">
            <img
              src="http://themesitem.com/demos/html/jobortunity/jobortunity/images/home-page-logo.png"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link
            to="/home"
            className="text-brand text-decoration-none text-white"
          >
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/bookingList"
            className="text-brand text-decoration-none text-white"
          >
            <FontAwesomeIcon icon={faAccessibleIcon} /> <span>Job List</span>
          </Link>
        </li>
        {loggedInUser.rule === "admin" && (
          <>
            <li>
              <Link
                to="/addBlog"
                className="text-brand text-decoration-none text-white"
              >
                <FontAwesomeIcon icon={faAddressBook} /> <span>Add Post</span>
              </Link>
            </li>
            <li>
              <Link
                to="/addAdmin"
                className="text-brand text-decoration-none text-white"
              >
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
              </Link>
            </li>
          </>
        )}

        <div></div>

        <li>
          <Link className="text-brand text-decoration-none text-white">
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </Link>
        </li>
        <div class="logout">
          <button
            onClick={() => setLoggedInUser({})}
            className="text-brand text-decoration-none text-white"
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
