import logo from './logo.svg';
import './App.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";


import Nav from "./Nav";
import Login from "./Login"
import profile from "./profile"
import Acc from "./AccPage"
import UpdateProfile from "./UpdateProfile"
import Dashboard from "./Dashboard";


import { AuthProvider } from "./contexts/AuthContext";
import * as React from 'react'


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          developers: []
      };


  }



  render() {
      const { developers } = this.state;

      return (
        <React.Fragment>
        <Router>
        
        <AuthProvider>
          <Nav>
          </Nav>
          <Switch>
            <Route path ="/Login" component ={Login}/>
            <Route path ="/Profile" component ={Dashboard}/>
            <Route path ="/Signup" component ={Acc}/>
            <Route path ="/Account" component ={profile}/>
            <Route path ="/update-profile" component ={UpdateProfile}/>
          </Switch>
        </AuthProvider>

        </Router>




        
      </React.Fragment>
    );
  }
}

export default App;