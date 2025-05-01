import React from 'react';
import "./PrimaryBtn.css";

function PrimaryBtn(props) {
    return (
        <>
            <button className='appointment-btn' onClick={props.onClick}>
                <p>{props.title}</p>
                <div className='appointment-btn-hover'>
                    <p>{props.titleOnHover}</p>
                </div>
            </button>
        </>
    );
}

export default PrimaryBtn;