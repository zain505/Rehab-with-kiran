import React from 'react';
import "./PrimaryBtn.css";

function PrimaryBtn(props) {
    return (
        <>
            <button className='appointment-btn'>
                <p>{props.title}</p>
                <div className='appointment-btn-hover'>
                    <p>{props.titleOnHover}</p>
                </div>
            </button>
        </>
    );
}

export default PrimaryBtn;