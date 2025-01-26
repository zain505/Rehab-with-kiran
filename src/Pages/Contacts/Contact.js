import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'
import { MdPadding, MdEmail, MdPhone, MdOpenInNew, MdLocationOn } from 'react-icons/md';
import {} from 'react-icons'
import { ImFacebook, ImInstagram } from 'react-icons/im'
import { FaAddressBook, FaAddressCard, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaRegAddressCard, FaTwitter } from 'react-icons/fa'
import { PiAddressBookTabsBold } from 'react-icons/pi'


function Contact() {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <h2 style={{display:'flex',justifyContent:'center', alignItems:'center'}}>Contact Us</h2>
    <div className='outer-container'>
      
      <div className='inner'>
        <div className='inner-left'>
        <div className='child-box'><MdLocationOn className='icons'/>
        <span className='social-icon-heading'><p>ADDRESS</p>
        <p>AWT, Phase 2</p>
        <p>Lahore, Pakistan</p>
        </span></div>
        <div className='child-box'><MdPhone className='icons'/>
        <span className='social-icon-heading'><p>CALL US</p>
        <p>+92 326 1997 724</p>
        </span>
        </div>
        </div>
  
        
        <div className='inner-right'>
        <div className='child-box'><MdEmail className='icons'/>
        <span className='social-icon-heading'><p>EMAIL</p>
        <p>rehabwithkiran@gmail.com</p>
        </span>
        </div>
        <div className='child-box'>
        <p>CONTACT US</p>
        <p>Contact for a virtual appointment.</p>
        <p className='social-icon'><ImFacebook/><ImInstagram/></p></div>
        </div>
        
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.2877805115586!2d74.21121017506243!3d31.35103695548955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918554b93b27181%3A0xd2958ad1a84bcbba!2sPlot%20507%2C%20Block%20D%20Awt%20Housing%20Scheme%20Phase%202%20AWT%20Phase%202%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1737884627449!5m2!1sen!2s" width="750px" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Contact
