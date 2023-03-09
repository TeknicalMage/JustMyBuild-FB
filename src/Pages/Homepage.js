import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Style from "./stylesheets/Homepage.css"
  
class Homepage extends React.Component {
  render() {
    return(
        <div>
           <Box sx={{ flexGrow: 1 }} style={{padding: "25px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                     <h1 style={{ fontSize: "4rem" , margin: "0", color: '#B4A5A5'}}>YOUR RIG WITHIN REACH.</h1>
                     <p style={{ fontSize: "1.2rem", color: "white"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
                </Grid>
                <Grid item xs={0} md={6}>
                      <img style={{width: "100%", height: "80%", }} src={require('../Assets/Pictures/engine.png')} />
                </Grid>
            </Grid>
           </Box>
        </div>
    )
  }
}
 
export default Homepage;