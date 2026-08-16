import React from 'react';
import "./Intro.css"
import PlayBack from "../../media/videoplayback.mp4";
import Navbar from "../Navbar/Navbar";
import PrimBtn from "../Button/PrimaryBtn"
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

function Intro() {
    const socialMediaUrl = (url) => {
        window.open(url, "_blank");
      };
    return (
        <>
            <div className='intro-outer'>
                <div className='overlay'>
                    <Navbar />
                    <div className='intro-middle-section'>
                        <div className='middle-section-content'>
                            <div className='slogan-area'>
                                <h1>Online physiotherapy<br />across Pakistan</h1>
                                <p className="intro-service-summary">Personalized telerehabilitation with Dr. Kiran Fatima through Zoom or Google Meet.</p>
                                <div className='changeable-slogan'>
                                    <p>Rehab with</p>
                                    <div className='change-text'>
                                        <div className='change-text-track'>
                                            <p>Care</p>
                                            <p>Compassion</p>
                                            <p>Professional</p>
                                            <p>Change</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='social-media-area'>
                                <div onClick={()=>socialMediaUrl("https://www.instagram.com/dr_kiran_fatima?igsh=MW8yd3YxdW1pZG5uOQ==")} className='social-icon'><span className="icon-instagram"></span></div>
                                <div onClick={()=>socialMediaUrl("https://www.youtube.com/@kiranPT237")} className='social-icon'><span className="icon-youtube"></span></div>
                                <div onClick={()=>socialMediaUrl("https://www.facebook.com/share/1Hjyke8qp5/")} className='social-icon'><span className="icon-facebook-logo-in-circular-shape"></span></div>
                                <div onClick={()=>socialMediaUrl("https://www.linkedin.com/in/kiran-fatima-kf30")} className='social-icon' aria-label='LinkedIn'><FaLinkedin /></div>
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
