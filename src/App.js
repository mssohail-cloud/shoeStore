import React from 'react';
import './App.css';
import { Grid, AppBar } from '@material-ui/core';
import Header from './Components/Header';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
import ProductListIndex from './Components/ProductListIndex';
import ProductDetails from './Components/ProductDetails';


function App() {
  return (
    <div>
      <Grid>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid>
        <Grid item xs={12}>
           <AppBar className="navigation" position="static">
          <ul>
            <li><Link to="/" color="primary">Home</Link></li>
            <li><Link to="ProductList">Products</Link></li>
            <li><Link to="ContactUs">Contact Us</Link></li>
            <li><Link to="About">About Us</Link></li>
          </ul>
        </AppBar>
        </Grid>
      </Grid>
      
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ProductList" element={<ProductList />} > 
            <Route path="/" element={<ProductListIndex />} /> 
            <Route path=":productID" element={<ProductDetails /> } />
          </Route>

          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="About" element={<About />} />
        </Routes>
        
    </div>
  );
}

export default App;
