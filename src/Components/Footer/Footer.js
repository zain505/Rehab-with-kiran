import React from 'react';
import "./Footer.css"
import { Container, Col, Row, Input, InputGroup, Button } from 'reactstrap';
import Logo from "../../media/logo3.png"

function Footer() {

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
                                <Col sm="1" lg="4">
                                    <div className='wrapper-right-inner display-around-wrapper'>
                                        <div className='wrapper-header'>
                                            <p>Reach Us</p>
                                        </div>
                                        <div className='wrapper-description'>
                                            <p style={{textTransform:"lowercase"}}>rehabwithkiran@gmail.com</p>
                                            <p>+922254458</p>
                                            <p>Insta:: </p>
                                            <p>Twitter:: </p>
                                            <p>Facebook:: </p>
                                            <p>Secondary Whatsapp::</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="1" lg="4">
                                    <div className='wrapper-right-inner'></div>
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