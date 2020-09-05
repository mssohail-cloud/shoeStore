import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Components/Header';


function App() {
  return (
    <div>
      <Grid>
        <Grid Item xs={12}>
          <Header />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
