import React from "react";
import { faCalendar, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressBook,
  faCog,
  faGripHorizontal,
  faHome,
  faSignOutAlt,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     fetch("https://desolate-badlands-10830.herokuapp.com/adminList")
//       .then((res) => res.json())
//       .then((data) => {
//         const checkAdmin = data.find(
//           (checkingPerson) => checkingPerson.email === loggedInUser.email
//         );
//         setIsAdmin(checkAdmin);
//       });
//   }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-3 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link className="text-brand text-decoration-none" to="/">
          <img src="http://themesitem.com/demos/html/jobortunity/jobortunity/images/home-page-logo.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-brand text-decoration-none text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/bookingList" className="text-brand text-decoration-none text-white">
            <FontAwesomeIcon icon={faAccessibleIcon} />{" "}
            <span>Job List</span>
          </Link>
        </li>
        <li>
          <Link  to="/add_post" className="text-brand text-decoration-none text-white">
            <FontAwesomeIcon icon={faAddressBook} /> <span>Add Post</span>
          </Link>
        </li>

          <div>

          </div>

        <li>
          <Link className="text-brand text-decoration-none text-white">
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </Link>
        </li>
        <div class="logout">
        <Link to="/" className="text-brand text-decoration-none text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
      </ul>
      {/* <div class="logout">
        <Link to="/" className="text-brand text-decoration-none text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;