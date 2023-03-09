import './App.css';

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";


import { AuthProvider } from "./BackendContexts/AuthContext";
import Homepage from "./Pages/Homepage";
import * as React from 'react'
import ResponsiveAppBar from './BackendContexts/NavbarContext'

import theme from './Assets/theme.js';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          developers: []
      };


  }



  render() {
      return (
        <div>
          <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme/>
           <React.Fragment>
                    <ResponsiveAppBar/>
                    <Homepage/>
            </React.Fragment>
          </ThemeProvider>
        </div>
      );
  }
}

export default App;