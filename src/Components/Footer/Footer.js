import React, { useState } from 'react';
import "./Footer.css"
import { Container, Col, Row, Input, InputGroup, Button } from 'reactstrap';
import Logo from "../../media/logo3.png"
import { MdPadding, MdEmail, MdPhone, MdOpenInNew } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
    let staticMessage = "This is Dr. Kiran How can i help you??"
    const socialMediaUrl = (url) => {
        window.open(url, "_blank");
      };

    return (
        <>
            <div className='footer-wrapper'>
                <Row style={{ height: "100%" }}>
                    <Col sm="1" lg="3" className='row-col-style'>
                        <div className='footer-wrapper-left'>
                            <img src={Logo} alt='logo3.png' />
                            <p>One Hub,Every Pain Relieved.</p>
                        </div>
                    </Col>
                    <Col sm="1" lg="9" className='row-col-style'>
                        <div className='footer-wrapper-right'>
                            <Row style={{ height: "100%" }}>
                                <Col sm="1" lg="4">
                                    <div className='wrapper-right-inner display-around-wrapper'>
                                        <div className='wrapper-header'>
                                            <p style={{ color: 'rgb(48, 169, 162)' }}>Why Us</p>
                                        </div>
                                        <div className='wrapper-description'>
                                            <p>Virtual Appointment</p>
                                            <p>Free Trial</p>
                                            <p>Multiple Sessions</p>
                                            <p>Easy Refund if not satisfied</p>
                                            <p>24/7 Support</p>
                                            <p>Personal Assistance</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="1" lg="4">
                                    <div className='wrapper-right-inner display-around-wrapper'>
                                        <div className='wrapper-header'>
                                            <p style={{ color: 'rgb(48, 169, 162)', fontWeight:'50px' }}>Reach Us</p>
                                        </div>
                                        <div className='wrapper-description'>
                                            <p style={{textTransform:'lowercase'}} onClick={()=>socialMediaUrl('mailto:rehabwithkiran@gmail.com')}><span><MdEmail style={{ fontSize: "17px", marginRight: '5px'}}/></span>rehabwithkiran@gmail.com</p>
                                            <p><span><MdPhone style={{ color: "white", fontSize: "17px", marginRight: '5px'}}/></span>+92 326 1997 724</p>
                                            <p onClick={()=>socialMediaUrl("https://github.com/settings/profile")}><span className="icon-instagram" style={{ marginRight: '8px'}}></span>insta/rehab-with-kiran</p>
                                            <p onClick={()=>socialMediaUrl("https://github.com/settings/profile")}><span className="icon-twitter" style={{ marginRight: '8px', textTransform: 'lowercase'}}></span>x/rehab-with-kiran</p>
                                            <p onClick={()=>socialMediaUrl("https://github.com/settings/profile")}><span className="icon-facebook-logo-in-circular-shape" style={{ marginRight: '8px'}}></span>fb/rehab-with-kiran</p>
                                            <p onClick={()=>socialMediaUrl(`https://api.whatsapp.com/send?phone=+923261997724&text=${staticMessage}`)}><FaWhatsapp style={{ color: "white", fontSize: "20px", marginRight: '5px' }} />+92 326 1997 724 <MdOpenInNew/></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="1" lg="4">
                                    <div className='wrapper-right-inner display-around-wrapper'>
                                        <div className='wrapper-header'>
                                            <p style={{ color: 'rgb(48, 169, 162)' }}>Addresses</p>
                                        </div>
                                        <div className='wrapper-description'>
                                            <p onClick={()=>socialMediaUrl("https://www.google.com/maps?q=31.3508530, 74.2138310")} >AWT Phase 2, Lahore <MdOpenInNew/></p>
                                        </div>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Footer;