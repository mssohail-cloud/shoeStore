import React from 'react';
import image from "../assets/heroImg.png"
import '../App.css';

function Header() {
    return (
        <>
          <img className="heroImg" src={image} alt="nikeshoe"/>  
        </>
    )
}

export default Header
