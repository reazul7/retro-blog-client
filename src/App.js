import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddBlog from './components/Admin/AddBlog';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addBlog">
            <AddBlog/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
