import React from 'react';
import "./Tele.css"
import PrimBtn from "../Button/PrimaryBtn"

function Tele() {
    return (
        <>
            <div className='parallax-effec'>
                <div className='right-for-me'>
                    <div className='heading'>
                        <p>Did you know that?</p>
                    </div>
                    <div className='justification'>
                        <p>
                        Telerehabilitation in physiotherapy refers to the use of digital communication technologies to deliver rehabilitation services remotely. This approach allows patients to receive assessments, consultations, and therapy sessions via video calls, mobile apps, or other online platforms. It enables patients to continue their rehabilitation from home, increasing accessibility and convenience while reducing the need for in-person visits.</p>
                    </div>
                    <div className='make-appointment'>
                        <PrimBtn  title={"Get Appointment"} titleOnHover={"Get Appointment"} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tele;