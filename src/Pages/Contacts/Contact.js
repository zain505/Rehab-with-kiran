import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { ImFacebook, ImInstagram } from 'react-icons/im'

function Contact() {
  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <div className='outer-container'>
        <h2 className='contact-heading'>Contact Us</h2>
        
        <div className='inner'>
          <div className='inner-left'>
            <div className='child-box'>
              <MdLocationOn className='icons MdLocationOn'/>
              <div className='social-icon-heading'>
                <p>ADDRESS</p>
                <p>AWT, Phase 2 Lahore, Pakistan</p>
              </div>
            </div>
            
            <div className='child-box'>
              <MdPhone className='icons MdPhone'/>
              <div className='social-icon-heading'>
                <p>CALL US</p>
                <p>+92 326 1997 724</p>
              </div>
            </div>
          </div>
          
          <div className='inner-right'>
            <div className='child-box'>
              <MdEmail className='icons MdEmail'/>
              <div className='social-icon-heading'>
                <p>EMAIL</p>
                <a href='mailto:rehabwithkiran@gmail.com'>
                  rehabwithkiran@gmail.com
                </a>
              </div>
            </div>
            
            <div className='child-box'>
              <div className='social-icon-heading'>
                <p>CONNECT WITH US</p>
                <p>Contact for a virtual appointment</p>
                <div className='social-icon'>
                  <ImFacebook onClick={() => window.open('https://www.facebook.com/share/1EaArVeGVy/', "_blank")}/>
                  <ImInstagram onClick={() => window.open('https://www.instagram.com/dr_kiran_fatima?igsh=MW8yd3YxdW1pZG5uOQ==', "_blank")}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='map-container'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.2877805115586!2d74.21121017506243!3d31.35103695548955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918554b93b27181%3A0xd2958ad1a84bcbba!2sPlot%20507%2C%20Block%20D%20Awt%20Housing%20Scheme%20Phase%202%20AWT%20Phase%202%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1737884627449!5m2!1sen!2s" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
