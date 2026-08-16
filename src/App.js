import { useEffect, useState } from 'react';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import "./icomoon/style.css"
import Logo3 from "./media/logo3.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import Whatsapp from './Components/whatsapp/Whatsapp';
import Story from './Pages/Story/Story';
import Blog from './Pages/Blogs/Blog';
import Contact from './Pages/Contacts/Contact';
import AdminDashboard from './Components/adminController/AdminDashboard';
import RevealOnScroll from './Components/RevealOnScroll/RevealOnScroll';
import { FaLinkedin } from 'react-icons/fa';
import ConsultationFee from './Pages/ConsultationFee/ConsultationFee';

// Support the original public story link while using React Router's hash format.
if (window.location.hash === "#my-story") {
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#/my-story`);
}


function App() {

  const SECRETADMINURL = "secret@url!!drkiranfatimaadmincontroller"

  const [openSideMenuBar, setOpenSideMenuBar] = useState(false);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);
  const closeMobileMenu = () => {
    document.body.style.overflow = "";
    setOpenSideMenuBar(false);
  };

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/appointment",
      element: <Appointment />,
    },
    {
      path: "/consultation-fee",
      element: <ConsultationFee />,
    },
    {
      path: "/story",
      element: <Story />,
    },
    {
      path: "/my-story",
      element: <Story />,
    },
    {
      path: "/blogs",
      element: <Blog/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: `/${SECRETADMINURL}`,
      element: <AdminDashboard/>,
    },
  ]);
  const sendEmail = () => {
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=kiran.fatimakf530@gmail.com&su=Get Appointment&body=&bcc=&tf=cm")
  }
  const sendWhatsAppMessage = () => {
    let staticMessage = "This is Dr. Kiran. How can I help you?"
    window.open(`https://api.whatsapp.com/send?phone=923261997724&text=${staticMessage}`, "_blank");
  }
  return (
    <div className="App">
      <RevealOnScroll />
      <header className="mobile-top-navbar">
        <a className="mobile-navbar-logo" href="#/" aria-label="Rehab with Kiran home">
          <img src={Logo3} alt="Rehab with Kiran" />
        </a>
        <button className='mobile-view-navbar' aria-label="Open navigation menu" aria-expanded={openSideMenuBar} onClick={() => {
          document.body.style.overflow = "hidden";
          setOpenSideMenuBar(true);
        }}>
          <span className='menu-bar-icon' aria-hidden="true">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>
      </header>
      {openSideMenuBar && <button className="mobile-menu-backdrop" aria-label="Close navigation menu" onClick={closeMobileMenu} />}
      <div className={openSideMenuBar ? 'open-side-menu' : 'close-side-menu'}>
        <button className='close-icon' aria-label="Close navigation menu" onClick={closeMobileMenu}>
          <span className="drawer-close-mark" aria-hidden="true"></span>
        </button>
        <div className='logo'>
          <div className='logo-area'>
            <img src={Logo3} alt={Logo3} />
          </div>
        </div>
        <div className='menu-items-section'>
          <a href="#/" className='menu-item-wrapper' onClick={closeMobileMenu}>
            <div className='menu-item-mob'><p className='item'>Home</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </a>
          <a href="#/appointment" className='menu-item-wrapper' onClick={closeMobileMenu}>
            <div className='menu-item-mob'><p className='item'>Get Appointment</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </a>
          <a href="#/consultation-fee" className='menu-item-wrapper' onClick={closeMobileMenu}>
            <div className='menu-item-mob'><p className='item'>Consultation Fee</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </a>
          <a href="#/my-story" className='menu-item-wrapper' onClick={closeMobileMenu}>
            <div className='menu-item-mob'><p className='item'>My Story</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </a>
          <a href="#/blogs" className='menu-item-wrapper' onClick={closeMobileMenu}>
            <div className='menu-item-mob'><p className='item'>Blogs</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </a>
          <a href="#/contact" className='menu-item-wrapper' onClick={closeMobileMenu}>
            <div className='menu-item-mob'><p className='item'>Contact Me</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </a>
        </div>
        <div className='mob-menu-footer'>
          <div className='contact-wrapper' onClick={sendEmail}>
            <div>
              <span className="icon-style icon-mail-recipient"></span>
            </div>
            <p className='email-text'>kiran.fatimakf530@gmail.com</p>
          </div>
          <div className='contact-wrapper'>
            <div>
              <span className="icon-style icon-whatsapp"></span>
            </div>
            <p onClick={sendWhatsAppMessage}  className='email-text'>+923248877456</p>
          </div>
        </div>
        <div className='social' aria-label="Social media">
          <div className='social-area'>
            <a className='socail-btn' href="https://www.facebook.com/share/1Hjyke8qp5/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <span className="icon-style icon-facebook-logo-in-circular-shape"></span>
            </a>
            <a className='socail-btn' href="https://www.youtube.com/@kiranPT237" target="_blank" rel="noreferrer" aria-label="YouTube">
              <span className="icon-style icon-youtube"></span>
            </a>
            <a className='socail-btn' href="https://www.instagram.com/dr_kiran_fatima" target="_blank" rel="noreferrer" aria-label="Instagram">
              <span className="icon-style icon-instagram"></span>
            </a>
            <a className='socail-btn' href="https://www.linkedin.com/in/kiran-fatima-kf30" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="icon-style" />
            </a>
          </div>
        </div>
      </div>
      {!openSideMenuBar && <Whatsapp/>}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
