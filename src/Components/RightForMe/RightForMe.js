import React from 'react';
import "./RightForMe.css"
import PrimBtn from "../Button/PrimaryBtn"
import Disability from "../../media/disability.png"
import Telehealth from "../../media/telehealth.png"
import FlashSale from "../../media/flash-sale.png"
import Appointment from "../../media/appointment.png"
import Muscle from "../../media/muscle.png"
import { Container, Col, Row } from 'reactstrap';

function RightForMe() {

    const MouseEnterForReason12 = (elem) => {
        let doc1 = document.getElementById("reason-1");
        let doc2 = document.getElementById("reason-2");
        if (!doc1 && !doc2) {
            return;
        } else {
            let style1 = doc1.style
            let style2 = doc2.style
            if (elem == 1) {
                style1.height = "500px";
                style2.height = "180px";
            } else if (elem == 2) {
                style1.height = "180px";
                style2.height = "500px";
            }

        }
    }
    const mouseLeaveFor12 = () => {
        let doc1 = document.getElementById("reason-1");
        let doc2 = document.getElementById("reason-2");
        if (!doc1 && !doc2) {
            return;
        } else {
            let style1 = doc1.style
            let style2 = doc2.style
            style1.height = "";
            style2.height = "";
            style1.height = "";
            style2.height = "";
        }
    }

    const MouseEnterForReason34 = (elem) => {
        let doc3 = document.getElementById("reason-3");
        let doc4 = document.getElementById("reason-4");
        if (!doc3 && !doc4) {
            return;
        } else {
            let style3 = doc3.style
            let style4 = doc4.style
            if (elem == 3) {
                style3.height = "500px";
                style4.height = "180px";
            } else if (elem == 4) {
                style3.height = "180px";
                style4.height = "500px";
            }

        }
    }
    const mouseLeaveFor34 = () => {
        let doc3 = document.getElementById("reason-3");
        let doc4 = document.getElementById("reason-4");
        if (!doc3 && !doc4) {
            return;
        } else {
            let style3 = doc3.style
            let style4 = doc4.style
            style3.height = "";
            style4.height = "";
            style3.height = "";
            style4.height = "";
        }
    }

    const MouseEnterForReason56 = (elem) => {
        let doc5 = document.getElementById("reason-5");
        let doc6 = document.getElementById("reason-6");
        if (!doc5 && !doc6) {
            return;
        } else {
            let style5 = doc5.style
            let style6 = doc6.style
            if (elem == 5) {
                style5.height = "500px";
                style6.height = "180px";
            } else if (elem == 6) {
                style5.height = "180px";
                style6.height = "500px";
            }

        }
    }
    const mouseLeaveFor56 = () => {
        let doc5 = document.getElementById("reason-5");
        let doc6 = document.getElementById("reason-6");
        if (!doc5 && !doc6) {
            return;
        } else {
            let style5 = doc5.style
            let style6 = doc6.style
            style5.height = "";
            style6.height = "";
            style5.height = "";
            style6.height = "";
        }
    }

    return (
        <>
            <div className='right-for-me-section'>
                <div className='right-for-me-section-inner'>
                    <div className='right-for-me-heading-area'>
                        <p className='right-for-me-heading'>
                            Are you the right candidate?
                        </p>
                        <p className='right-for-me-slogan'>The best candidates for telerehabilitation in physiotherapy include</p>
                    </div>
                    <div className='right-for-me-reasons'>
                        <div className='right-for-me-reasons-inner'>

                            <div className='reason-outer'>
                                <div onMouseEnter={(e) => MouseEnterForReason12(1)} onMouseLeave={mouseLeaveFor12} id='reason-1' className='reason-1'>
                                    <div className='reason-content'>
                                        <div className='problem-area'>
                                            <p className='reason-heading'>
                                                Problem:
                                            </p>
                                            <p className='reason-header'>
                                                Individuals with Mobility Challenges
                                            </p>

                                        </div>
                                        <div className='problem-picture'>
                                            <img src={Disability} className='' style={{ transform: "scaleX(-1)" }} height={"50%"} width={"50%"} alt='Disability' />
                                        </div>
                                        <div className='solution-area'>
                                            <p className='reason-heading'>
                                                Solution:
                                            </p>
                                            <p className='reason-detail'>
                                                Those who have difficulty traveling due to physical limitations or disabilities.Empowering independence through accessible innovation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div onMouseEnter={(e) => MouseEnterForReason12(2)} onMouseLeave={mouseLeaveFor12} id='reason-2' className='reason-2'>
                                    <div className='reason-content'>
                                        <div className='problem-area'>
                                            <p className='reason-heading'>
                                                Problem:
                                            </p>
                                            <p className='reason-header'>
                                                Patients in Remote or Rural Areas
                                            </p>

                                        </div>
                                        <div className='problem-picture'>
                                            <img src={Telehealth} className='' style={{ transform: "scaleX(-1)" }} height={"auto"} width={"70%"} alt='Disability' />
                                        </div>
                                        <div className='solution-area'>
                                            <p className='reason-heading'>
                                                Solution:
                                            </p>
                                            <p className='reason-detail'>
                                                Bridging Healthcare Gaps with Remote Access and Local Support. People who live far from specialized physiotherapy clinics
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='reason-outer'>
                                <div onMouseEnter={(e) => MouseEnterForReason34(3)} onMouseLeave={mouseLeaveFor34} id='reason-3' className='reason-3'>
                                    <div className='reason-content'>
                                        <div className='problem-area'>
                                            <p className='reason-heading'>
                                                Problem:
                                            </p>
                                            <p className='reason-header'>
                                                Busy Professionals
                                            </p>

                                        </div>
                                        <div className='problem-picture'>
                                            <img src={FlashSale} className='' style={{ transform: "scaleX(-1)" }} height={"50%"} width={"50%"} alt='Disability' />
                                        </div>
                                        <div className='solution-area'>
                                            <p className='reason-heading'>
                                                Solution:
                                            </p>
                                            <p className='reason-detail'>
                                                Individuals with tight schedules who find it challenging to attend in-person sessions. Streamlining Success with Efficient Solutions for Time-Pressed Professionals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div onMouseEnter={(e) => MouseEnterForReason34(4)} onMouseLeave={mouseLeaveFor34} id='reason-4' className='reason-4'>
                                    <div className='reason-content'>
                                        <div className='problem-area'>
                                            <p className='reason-heading'>
                                                Problem:
                                            </p>
                                            <p className='reason-header'>
                                                Post-Surgery or Injury
                                            </p>

                                        </div>
                                        <div className='problem-picture'>
                                            <img src={Appointment} className='' style={{ transform: "scaleX(-1)" }} height={"50%"} width={"50%"} alt='Disability' />
                                        </div>
                                        <div className='solution-area'>
                                            <p className='reason-heading'>
                                                Solution:
                                            </p>
                                            <p className='reason-detail'>
                                                Patients needing follow-up care and monitoring without frequent trips to a clinic.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='reason-outer'>
                                <div onMouseEnter={(e) => MouseEnterForReason56(5)} onMouseLeave={mouseLeaveFor56} id='reason-5' className='reason-5'>
                                    <div className='reason-content'>
                                        <div className='problem-area'>
                                            <p className='reason-heading'>
                                                Problem:
                                            </p>
                                            <p className='reason-header'>
                                                Those with Chronic Conditions
                                            </p>

                                        </div>
                                        <div className='problem-picture'>
                                            <img src={Muscle} className='' style={{ transform: "scaleX(-1)" }} height={"50%"} width={"50%"} alt='Disability' />
                                        </div>
                                        <div className='solution-area'>
                                            <p className='reason-heading'>
                                                Solution:
                                            </p>
                                            <p className='reason-detail'>
                                                Individuals requiring ongoing management and support for long-term conditions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div onMouseEnter={(e) => MouseEnterForReason56(6)} onMouseLeave={mouseLeaveFor56} id='reason-6' className='reason-6'></div>
                            </div>

                        </div>
                    </div>
                    <div className='right-for-me-reasons-mob'>
                        <div className='reason-box'>
                            <div className='reason-box-heading'>
                                <p>Individuals with Mobility Challenges</p>
                            </div>
                            <div className='reason-box-picture'>
                                <img src={Disability} className='' style={{ transform: "scaleX(-1)" }} height={"100%"} width={"60%"} alt='Disability' />
                            </div>
                            <div className='reason-box-description'>
                                <p>Those who have difficulty traveling due to physical limitations or disabilities.Empowering independence through accessible innovation.</p>
                            </div>
                        </div>
                        <div className='reason-box'>
                            <div className='reason-box'>
                                <div className='reason-box-heading'>
                                    <p>Patients in Remote or Rural Areas</p>
                                </div>
                                <div className='reason-box-picture'>
                                    <img src={Telehealth} className='' style={{ transform: "scaleX(-1)" }} height={"100%"} width={"60%"} alt='Disability' />
                                </div>
                                <div className='reason-box-description'>
                                    <p>Bridging Healthcare Gaps with Remote Access and Local Support. People who live far from specialized physiotherapy clinics</p>
                                </div>
                            </div>
                        </div>
                        <div className='reason-box'>
                            <div className='reason-box'>
                                <div className='reason-box-heading'>
                                    <p>Busy Professionals</p>
                                </div>
                                <div className='reason-box-picture'>
                                    <img src={FlashSale} className='' style={{ transform: "scaleX(-1)" }} height={"100%"} width={"40%"} alt='Disability' />
                                </div>
                                <div className='reason-box-description'>
                                    <p>Individuals with tight schedules who find it challenging to attend in-person sessions. Streamlining Success with Efficient Solutions for Time-Pressed Professionals.</p>
                                </div>
                            </div>
                        </div>
                        <div className='reason-box'>
                            <div className='reason-box'>
                                <div className='reason-box-heading'>
                                    <p>Post-Surgery or Injury</p>
                                </div>
                                <div className='reason-box-picture'>
                                    <img src={Appointment} className='' style={{ transform: "scaleX(-1)" }} height={"100%"} width={"40%"} alt='Disability' />
                                </div>
                                <div className='reason-box-description'>
                                    <p>Patients needing follow-up care and monitoring without frequent trips to a clinic.</p>
                                </div>
                            </div>
                        </div>
                        <div className='reason-box'>
                            <div className='reason-box'>
                                <div className='reason-box-heading'>
                                    <p>Those with Chronic Conditions</p>
                                </div>
                                <div className='reason-box-picture'>
                                    <img src={Muscle} className='' style={{ transform: "scaleX(-1)" }} height={"100%"} width={"40%"} alt='Disability' />
                                </div>
                                <div className='reason-box-description'>
                                    <p>Individuals requiring ongoing management and support for long-term conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightForMe;