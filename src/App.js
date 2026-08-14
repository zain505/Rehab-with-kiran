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
      path: "/story",
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
      <button className='mobile-view-navbar' aria-label="Open navigation menu" aria-expanded={openSideMenuBar} onClick={() => {
        document.body.style.overflow = "hidden";
        setOpenSideMenuBar(true);
      }}>
        <div className='menu-bar-icon'>
          {/* <img src={Arrow} alt={Arrow} /> */}
          <div className='right-arrow-wrapper'>
            <span className="icon-right-arrow1"></span>
          </div>
        </div>
      </button>
      {openSideMenuBar && <button className="mobile-menu-backdrop" aria-label="Close navigation menu" onClick={closeMobileMenu} />}
      <div className={openSideMenuBar ? 'open-side-menu' : 'close-side-menu'}>
        <button className='close-icon' aria-label="Close navigation menu" onClick={closeMobileMenu}>
          <span className="icon-left-arrow"></span>
          
        </button>
        <div className='logo'>
          <div className='logo-area'>
            <img src={Logo3} alt={Logo3} />
          </div>
        </div>
        <div className='social'>
          <div className='social-area'>
            <button className='socail-btn'>
              <span className="icon-style icon-facebook-logo-in-circular-shape"></span>Facebook</button>
            <button className='socail-btn'>
              <span className="icon-style icon-youtube"></span>Youtube</button>
          </div>
          <div className='social-area'>
            <button className='socail-btn'>
              <span className="icon-style icon-instagram"></span>Instagram</button>
            <button className='socail-btn'>
              <span className="icon-style icon-twitter"></span>Twitter</button>
          </div>
        </div>
        <hr style={{marginBottom:"45px"}} />
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
          <a href="#/story" className='menu-item-wrapper' onClick={closeMobileMenu}>
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
      </div>
      <Whatsapp/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
