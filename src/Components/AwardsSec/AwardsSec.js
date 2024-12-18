import React from 'react';
import "./AwardsSec.css";
import medal from "../../media/goldmedal.jpg"

function AwardsSec() {
    return (
        <>
          <div className='award-section-outer'>
            <div className='award-heading'>
                <p>Academic Awards & Certifications</p>
            </div>

            <div className='award-section'>
                <div className='award-section-pic'>
                    <img src={medal} height={"100%"} width={"100%"} />
                </div>
                <p>Gold Medalist</p>
            </div>

          </div>

        </>
    )
}

export default AwardsSec;