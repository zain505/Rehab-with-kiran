import React from 'react';
import "./VirtualAppointment.css"
import PrimBtn from "../Button/PrimaryBtn"
import { FormGroup, Input, Label } from 'reactstrap';
import { DatePicker } from 'reactstrap-date-picker'

function VirtalAppointment() {
    return (
        <>
            <div className='appointment-wrapper'>
                <div className='header'>
                    <p>Virtual Appointments Available!</p>
                </div>
                <div className='slogan'>
                    <p>Can’t make it to hospital? You can have a virtual appointment from the comfort and safety of your own home. We can also mail your supplements directly to you.</p>
                </div>
                <div className='web-form-view'>
                    <div className='input-wrapper-full'>
                        <p>Full Name: <span className='required-star'>*</span></p>
                        <Input />
                    </div>
                    <div className='input-wrapper-half'>
                        <p>Email: <span className='required-star'>*</span></p>
                        <Input />
                    </div>
                    <div className='input-wrapper-half'>
                        <p>WhatsApp: <span className='required-star'>*</span> (Ex. +923123456789)</p>
                        <Input />
                    </div>
                    <div className='input-wrapper-half'>
                        <p>Address:  </p>
                        <Input />
                    </div>
                    <div className='input-wrapper-half'>
                        <p>When you want:  <span className='required-star'>*</span></p>
                        <DatePicker dateFormat="DD/MM/YYYY" defaultValue={new Date()} id="example-datepicker"/>
                    </div>
                    <div className='input-wrapper-full'>
                        <FormGroup>
                            <p>Which channel we can speak with you: <span className='required-star'>*</span></p>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                            >
                                <option>
                                    Select One
                                </option>
                                <option>
                                    Google Meets
                                </option>
                                <option>
                                    Zoom
                                </option>
                                <option>
                                    Skype
                                </option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div className='input-wrapper-full'>
                        <p>Message: </p>
                        <Input type='textarea' />
                    </div>
                    <div className='input-wrapper-full'>
                        <FormGroup>
                            <p>How Did you find us: </p>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                            >
                                <option>
                                    Select One
                                </option>
                                <option>
                                    Google
                                </option>
                                <option>
                                    Social Media
                                </option>
                                <option>
                                    Referral
                                </option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div className='virtual-submittion-btn-wrapper'>
                        <PrimBtn  title={"Send"} titleOnHover={"Send"} />

                    </div>


                </div>
            </div>

        </>
    )
}

export default VirtalAppointment;