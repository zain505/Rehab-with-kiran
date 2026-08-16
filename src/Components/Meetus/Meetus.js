import React from 'react';
import "./Meetus.css";
import Photo from "../../media/4.jpg"
import PrimBtn from "../Button/PrimaryBtn"
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
function Meetus() {


    return (
        <>
            <div className='meet-us-section'>
                <ScrollToTop/>
                <div className='meet-us-content'>
                    <div className='text-content'>
                        <p className='meet-dr-heading'>Meet Dr. Kiran Fatima</p>
                        <div className='image-area-mob'>
                            <img src={Photo} width={"100%"} height={"100%"} alt="Dr. Kiran Fatima, physiotherapist" />
                        </div>
                        <p className='meet-dr-detail'>
                            Dr. Kiran Fatima is a dedicated physiotherapist based in Lahore, Pakistan. A proud graduate of Riphah International University, she earned both her undergraduate and master's degrees in Orthopedic Manual Therapy from the same esteemed institution. Through online calls, Zoom, and Google Meet, she provides personalized physiotherapy consultations and telerehabilitation to clients across Pakistan. Recognized for her excellence, Dr. Fatima is also a gold medalist in her field.

                            Her approach integrates comprehensive treatment strategies, emphasizing personalized care and holistic well-being.
                        </p>
                        <div className='meet-us-btn'>
                            
                            <p><Link style={{textDecoration:'none'}} to="/story"><PrimBtn  title={"Meet Dr. Kiran"} titleOnHover={"Meet Dr. Kiran"} /></Link></p>
                        </div>
                    </div>
                    <div className='image-area'>
                        <img src={Photo} width={"100%"} height={"100%"} alt="Dr. Kiran Fatima, physiotherapist" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Meetus;
