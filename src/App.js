import './App.css';
import React from 'react';
//import profileImage from './img/MainContent-Right-Img.jpg';
import { Grid } from '@mui/material';
import HomeContent from './homeContent';

// Main app display
class App extends React.Component {
  render() {
    return (
      <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <HomeContent />
      </Grid>
    );      
  }
}

export default App;
