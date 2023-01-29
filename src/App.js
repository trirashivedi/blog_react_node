import "./Assets/styles/style.css";
import TopBar from "./Components/topbar/TopBar";
// import Header from "./Components/header/Header"
import Home from "./Components/pages/home/Home";
import Single from "./Components/pages/single/Single";
import Write from "./Components/pages/write/Write";
import Settings from "./Components/pages/settings/Settings";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from "react-router";

function App() {
  const user = true;
  return (
    <Router>
     <TopBar />
     <Switch>
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="/register">
           {user ?<Home /> : <Register /> }
        </Route>
        <Route path="/write">
        {user ?<Write />:  <Register />  }
        </Route>
        <Route path="/login">
        {user ?<Home /> :  <Login /> }
        </Route> <Route path="/login">
        {user ?<Home /> :  <Login /> }
        </Route>
        <Route path="/settings">
        {user ? <Settings />:  <Register />  }
        </Route>
        <Route path="/post/:postId">
          <Single /> 
        </Route>
       
     </Switch>
     
    </Router>
   
  );
}

export default App;
