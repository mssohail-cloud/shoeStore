import React from 'react';
import image from "../assets/heroImg.png"
import '../App.css';
import { Grid } from '@material-ui/core';

function Header() {
    return (
        <>
        <Grid>
          <Grid item xs={12}>
             <img className="heroImg" src={image} alt="nikeshoe"/> 
          </Grid>
        </Grid>
        </>
    )
}

export default Header
