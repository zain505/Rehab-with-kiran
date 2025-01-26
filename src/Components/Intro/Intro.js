import React from 'react';
import "./Intro.css"

import PlayBack from "../../media/videoplayback.mp4";

import Navbar from "../Navbar/Navbar";
import PrimBtn from "../Button/PrimaryBtn"
import { Link } from 'react-router-dom';

function Intro() {
    const socialMediaUrl = (url) => {
        window.open(url, "_blank");
      };
    return (
        <>
            <div className='intro-outer'>
                <div class="overlay">
                    <div className='ticker'>
                        <p className='text-color-white'>Happening Now! 50% Discount, Click On Get Appointment</p>
                    </div>
                    <Navbar />
                    <div className='intro-middle-section'>
                        <div className='middle-section-content'>
                            <div className='slogan-area'>
                                <p>One Hub,</p>
                                <p>Every Pain Relieved.</p>
                                <div className='changeable-slogan'>
                                    <p>Rehab with</p>
                                    <div className='change-text'>
                                        <p>Care Compassion Professional Change</p>

                                    </div>
                                </div>
                            </div>
                            <div className='social-media-area'>
                                <div onClick={()=>socialMediaUrl("https://github.com/settings/profile")} className='social-icon'><span className="icon-instagram"></span></div>
                                <div onClick={()=>socialMediaUrl("https://github.com/settings/profile")} className='social-icon'><span className="icon-twitter"></span></div>
                                <div onClick={()=>socialMediaUrl("https://github.com/settings/profile")} className='social-icon'><span className="icon-youtube"></span></div>
                                <div onClick={()=>socialMediaUrl("https://github.com/settings/profile")} className='social-icon'><span className="icon-facebook-logo-in-circular-shape"></span></div>
                            </div>
                        </div>
                    </div>
                    <div className='get-appointment-btn-section'>
                        <div className='get-appointment-btn-content'>
                        <p><Link className='menu-item' style={{textDecoration:'none'}} to="/appointment"><PrimBtn  title={"Get Appointment"} titleOnHover={"Get Appointment"} /></Link></p>
                        </div>
                    </div>
                    <div className='go-down-btn-section'>
                        <button className='go-down-btn'>
                            <div className='intro-right-arrow-icon'>
                                <div className='icon-section'>
                                    <span className="icon-right-arrow"></span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <video id="video" style={{ objectFit: "cover" }} width="100%" height="100%" loop autoPlay muted>
                    <source src={PlayBack} type="video/mp4" />
                </video>
                {/* #000435 */}
            </div>
        </>
    )
}

export default Intro;