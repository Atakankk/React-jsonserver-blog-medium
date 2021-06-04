import '../src/App.css'
import Navbar from "../src/Navbar.js";
import Home from  "./home.js";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create"
import BlogDetails from './BlogDetails';
import NotFound from "./NotFound"
import React from "react"
import Signup from "./login/SignUp"








function App() {
  
  return (
    <Router>
      
      <div className="App">
        <Navbar isHome={false} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
           
           
            
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          
        </div>
        
        
        
      </div>
    </Router>
  );
}


export default App;
