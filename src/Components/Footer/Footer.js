
import React from 'react';
import "./Footer.css";
import { Container, Col, Row } from 'reactstrap';
import Logo from "../../media/logo3.png";
import { MdEmail, MdPhone, MdOpenInNew } from 'react-icons/md';
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
    let staticMessage = "This is Dr. Kiran How can I help you?";
    
    const socialMediaUrl = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className='footer-wrapper'>
            <Container fluid>
                <Row className="text-center text-md-left">
                    <Col xs="12" md="4" className='footer-wrapper-left'>
                        <img src={Logo} alt='logo' />
                        <p>One Hub, Every Pain Relieved.</p>
                    </Col>
                    <Col xs="12" md="8" className='footer-wrapper-right'>
                        <Row>
                            <Col xs="12" sm="4">
                                <div className='display-around-wrapper'>
                                    <div className='wrapper-header'>
                                        <p>Why Us</p>
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
                            <Col xs="12" sm="4">
                                <div className='display-around-wrapper'>
                                    <div className='wrapper-header'>
                                        <p>Reach Us</p>
                                    </div>
                                    <div className='wrapper-description'>
                                        <p onClick={() => socialMediaUrl('mailto:rehabwithkiran@gmail.com')}>
                                            <MdEmail /> rehabwithkiran@gmail.com
                                        </p>
                                        <p><MdPhone /> +92 326 1997 724</p>
                                        <p onClick={() => socialMediaUrl("https://www.instagram.com/dr_kiran_fatima")}>
                                            <FaInstagram/> Insta / rehab-with-kiran
                                        </p>
                                        <p onClick={() => socialMediaUrl("https://www.facebook.com/share/1EaArVeGVy/")}>
                                            <FaFacebook/> Facebook / rehab-with-kiran
                                        </p>
                                        <p onClick={() => socialMediaUrl(`https://api.whatsapp.com/send?phone=+923261997724&text=${staticMessage}`)}>
                                            <FaWhatsapp /> +92 326 1997 724 <MdOpenInNew />
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" sm="4">
                                <div className='display-around-wrapper'>
                                    <div className='wrapper-header'>
                                        <p>Addresses</p>
                                    </div>
                                    <div className='wrapper-description'>
                                        <p onClick={() => socialMediaUrl("https://www.google.com/maps?q=31.3508530, 74.2138310")}>
                                            AWT Phase 2, Lahore <MdOpenInNew />
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;


