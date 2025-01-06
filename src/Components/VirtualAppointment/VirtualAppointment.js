import React, { useEffect, useState } from 'react';
import "./VirtualAppointment.css"
import PrimBtn from "../Button/PrimaryBtn"
import { FormGroup, Input, Label } from 'reactstrap';
// import { DatePicker } from 'reactstrap-date-picker'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { type } from '@testing-library/user-event/dist/type';

function VirtalAppointment() {
    const [startDate, setStartDate] = useState(new Date());
    const [countriesDialingCodes, setCountriesDialingCode] = useState([]);
    const [countryDialingCode, setCountryDialingCode] = useState(null);
    const [UserPhone, setUserPhone] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all").then(response => {
            response.json().then(country => {
                reArrangeCountryDialingCode(country)
            })
        })
    }, [])

    const reArrangeCountryDialingCode = (countryList) => {
        let newDialingCode = []
        countryList.map(country => {
            if (country?.idd?.suffixes?.length > 1) {
                country?.idd?.suffixes.map(suffix => {
                    newDialingCode.push({ Dialingcode: `${country?.idd?.root}${suffix}`, countryName: country.name.common })
                })
            } else if (country?.idd?.suffixes?.length == 1) {
                newDialingCode.push({ Dialingcode: `${country?.idd?.root}${country?.idd?.suffixes[0]}`, countryName: country.name.common })
            }

        })
        setCountriesDialingCode(newDialingCode.sort((a, b) => a.countryName.localeCompare(b.countryName)))
    }

    const handleCountryCode = (e) => {
        const { value } = e.target; // Get the selected value
        setCountryDialingCode(value)
    }

    const handlePhoneNumber = (event) => {
        const { value } = event.target; // Get the selected value
        if (!isNaN(value) && value.length <= 10) {
            setUserPhone(value)
        }
    }
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
                        <p>WhatsApp: <span className='required-star'>*</span> (ex. 3123456789)</p>
                        <FormGroup style={{ display: 'flex' }}>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={countryDialingCode}
                                suppressHydrationWarning
                                onChange={(e) => handleCountryCode(e)}
                                style={{ width: 100 }}
                            >
                                {
                                    countriesDialingCodes?.map(info => {
                                        return (
                                            <option value={info.Dialingcode}>
                                                {info.countryName}{"-"}({info.Dialingcode})
                                            </option>
                                        )
                                    })
                                }
                            </Input>
                            <Input type='number' value={UserPhone} onChange={(e) => handlePhoneNumber(e)} />
                        </FormGroup>

                    </div>
                    <div className='input-wrapper-half'>
                        <p>Address:  </p>
                        <Input />
                    </div>
                    <div className='input-wrapper-half'>
                        <p>When you want:  <span className='required-star'>*</span></p>
                        <DatePicker

                            dateFormat={'dd/MM/yyyy'}
                            minDate={new Date()}
                            todayButton={true}
                            showMonthDropdown
                            calendarStartDay={0}
                            className=''
                            showIcon
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
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
                                    Friend & Family Referral
                                </option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div className='virtual-submittion-btn-wrapper'>
                        <PrimBtn title={"Send"} titleOnHover={"Send"} />

                    </div>


                </div>
            </div>

        </>
    )
}

export default VirtalAppointment;