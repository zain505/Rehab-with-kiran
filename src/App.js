import { useState } from 'react';
import './App.css';

import {
  createHashRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
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


function App() {

  const [openSideMenuBar, setOpenSideMenuBar] = useState(false);

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
  ]);
  const sendEmail = () => {
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=kiran.fatimakf530@gmail.com&su=Get Appointment&body=&bcc=&tf=cm")
  }
  const sendWhatsAppMessage = () => {
    let staticMessage = "Hi, Doc! i want to get appointment."
    window.open(`https://api.whatsapp.com/send?phone=+923261997724&text=${staticMessage}`, "_blank");
  }
  return (
    <div className="App">
      <div className='mobile-view-navbar'>
        <div className='menu-bar-icon'>
          {/* <img src={Arrow} alt={Arrow} /> */}
          <div className='right-arrow-wrapper' onClick={() => {
            window.scrollTo(0, 0)
            document.body.style.overflow = "hidden";
            setOpenSideMenuBar(true)
          }}>
            <span className="icon-right-arrow1"></span>
          </div>
        </div>
      </div>
      <div className={openSideMenuBar ? 'open-side-menu' : 'close-side-menu'}>
        <div className='close-icon' onClick={() => {
          document.body.style.overflow = "";
          setOpenSideMenuBar(false)
        }}>
          <span className="icon-left-arrow"></span>
          
        </div>
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
          <div className='menu-item-wrapper'> 
            <div className='menu-item-mob'><p className='item'>Home</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </div>
          <div className='menu-item-wrapper'>
            <div className='menu-item-mob'><p className='item'>Get Appointment</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </div>
          <div className='menu-item-wrapper'>
            <div className='menu-item-mob'><p className='item'>My Story</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </div>
          <div className='menu-item-wrapper'>
            <div className='menu-item-mob'><p className='item'>Blogs</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </div>
          <div className='menu-item-wrapper'>
            <div className='menu-item-mob'><p className='item'>Contact Me</p></div>
            <div className='arrow-icon'>
              <span className="icon-right-arrow1"></span>
            </div>
          </div>
        </div>
        <div className='mob-menu-footer'>
          <div className='contact-wrapper' onClick={sendEmail}>
            <div>
              <span class="icon-style icon-mail-recipient"></span>
            </div>
            <p className='email-text'>kiran.fatimakf530@gmail.com</p>
          </div>
          <div className='contact-wrapper'>
            <div>
              <span class="icon-style icon-whatsapp"></span>
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
