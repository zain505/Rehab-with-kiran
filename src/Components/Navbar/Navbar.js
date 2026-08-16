import React from 'react';
import "./Navbar.css";
import Logo3 from "../../media/logo3.png"
import { Link } from 'react-router-dom';


function Navbar() {

  
  return (
    <>
      <div className='menu-section'>
        <div className='menu-section-content'>
          <div className='logo'>
            <img src={Logo3} alt="Rehab with Kiran" />
          </div>
          <div className='menu-items'>
            <p className='menu-item'><Link className='menu-item' style={{textDecoration:'none'}} to="/">Home</Link></p>
            <p className='menu-item'><Link className='menu-item' style={{textDecoration:'none'}} to="/appointment">Get Appointment</Link></p>
            <p className='menu-item'><Link className='menu-item' style={{textDecoration:'none'}} to="/consultation-fee">Consultation Fee</Link></p>
            <p className='menu-item'><Link className='menu-item' style={{textDecoration:'none'}} to="/my-story">My Story</Link></p>
            <p className='menu-item'><Link className='menu-item' style={{textDecoration:'none'}} to="/blogs">Blogs</Link></p>
            <p className='menu-item'><Link className='menu-item' style={{textDecoration:'none'}} to="/contact">Contact Me</Link></p>
          </div>
          <div className='language' aria-label="Current language: English">
            <span className="icon-world" aria-hidden="true"></span>
            <span className='lang-text' lang="en">EN</span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar;
