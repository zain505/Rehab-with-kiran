import React from 'react';
import "./Meetus.css";
import Photo from "../../media/4.jpeg"
import PrimBtn from "../Button/PrimaryBtn"
import { Container, Col, Row } from 'reactstrap';
function Meetus() {


    return (
        <>
            <div className='meet-us-section'>
                <div className='meet-us-content'>
                    <div className='text-content'>
                        <p className='meet-dr-heading'>Meet Dr. Kiran Fatima</p>
                        <div className='image-area-mob'>
                            <img src={Photo} width={"100%"} height={"100%"} />
                        </div>
                        <p className='meet-dr-detail'>
                            Dr. Kiran Fatima is a dedicated physical therapist based in Lahore, Pakistan. A proud graduate of Riphah International University, she earned both her undergraduate and master's degrees in Orthopedic Manual Therapy from the same esteemed institution. Dr. Fatima combines hands-on expertise with a commitment to patient care. In addition to her in-person practice, she offers online consultations through various platforms including WhatsApp and Instagram. Recognized for her excellence, Dr. Fatima is also a gold medalist in her field.

                            Her approach integrates comprehensive treatment strategies, emphasizing personalized care and holistic well-being.
                        </p>
                        <div className='meet-us-btn'>
                            <PrimBtn  title={"Meet Dr. Kiran"} titleOnHover={"Meet Dr. Kiran"} />
                        </div>
                    </div>
                    <div className='image-area'>
                        <img src={Photo} width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Meetus;