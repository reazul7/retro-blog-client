import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddBlog from './components/Admin/AddBlog';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import AddAdmin from './components/Admin/AddAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[ loggedInUser, setLoggedInUser ]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addBlog">
            <AddBlog/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
