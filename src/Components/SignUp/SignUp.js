import React from 'react';
import "./Sign.css"
import { Container, Col, Row, Input, InputGroup, Button } from 'reactstrap';

function SignUp() {

    return (
        <>
            <div className='news-letter-wrapper'>
                <div className='content-section'>
                    <p>SignUp for news letter, upcoming medical camp & blogs</p>
                    <InputGroup>
                        <Input placeholder='email@gmail.com' />
                        <Button style={{backgroundColor:"#4DB8A6"}}>
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </>
    )
}

export default SignUp;