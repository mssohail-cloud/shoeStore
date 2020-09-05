import React from 'react';
import './App.css';
import { Grid, AppBar } from '@material-ui/core';
import Header from './Components/Header';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Grid>
        <Grid Item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid>
        <AppBar className="navigation" position="static">
          <ul>
            <li><Link to="/" color="primary">Home</Link></li>
            <li><Link to="ProductList">Products</Link></li>
            <li><Link to="ContactUs">Contact Us</Link></li>
            <li><Link to="About">About Us</Link></li>
          </ul>
      
        </AppBar>
      </Grid>
      <Grid container space={3}>
        <Grid item xs={12} sm={4}>
          item 1
        </Grid>
        <Grid item xs={12} sm={4}>
          Item 2
        </Grid>
        <Grid item xs={12} sm={4}>
          Item 3
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
