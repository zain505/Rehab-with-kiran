import React, { useState } from 'react';
import "./Navbar.css";
import Logo1 from "../../media/logo1.png"
import Logo2 from "../../media/logo2.png"
import Logo3 from "../../media/logo3.png"
import Arrow from "../../media/arrow.png"
import PrimaryBtn from "../../Components/Button/PrimaryBtn"

function Navbar() {

  
  return (
    <>
      <div className='menu-section'>
        <div className='menu-section-content'>
          <div className='logo'>
            <img src={Logo3} />
          </div>
          <div className='menu-items'>
            <p className='menu-item'>Home</p>
            <p className='menu-item'>Get Appointment</p>
            <p className='menu-item'>My Story</p>
            <p className='menu-item'>Blogs</p>
            <p className='menu-item'>Contact Me</p>
          </div>
          <div className='language'>
            <span className="icon-world"></span>
            <p className='lang-text'>En</p>
          </div>
        </div>
      </div>
      
      <div className='mobile-view'>
        <div className='text-slogan-mob'>
          <p>Your Personal physician is one click away</p>
        </div>
        <div className='navbar-appointBtn'>
          <PrimaryBtn titleOnHover={"Get Appointment"} title={"Get Appointment"} />
        </div>
      </div>
      
    </>
  )
}

export default Navbar;