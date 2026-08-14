import React from 'react';
import "./Sign.css"
import { Input, InputGroup, Button } from 'reactstrap';

function SignUp() {

    return (
        <section className="newsletter-section" aria-labelledby="newsletter-heading">
            <div className="newsletter-orb newsletter-orb--left" aria-hidden="true" />
            <div className="newsletter-orb newsletter-orb--right" aria-hidden="true" />

            <div className="newsletter-card">
                <div className="newsletter-copy">
                    <p className="newsletter-eyebrow">Stay connected</p>
                    <h2 id="newsletter-heading">Care, guidance, and community&mdash;delivered.</h2>
                    <p className="newsletter-description">
                        Sign up for our newsletter, upcoming medical camps, and blogs.
                    </p>
                </div>

                <div className="newsletter-signup">
                    <InputGroup className="newsletter-input-group">
                        <Input
                            className="newsletter-input"
                            type="email"
                            aria-label="Email address"
                            placeholder="email@example.com"
                        />
                        <Button className="newsletter-button" type="button">
                            Subscribe
                            <span aria-hidden="true">&#8594;</span>
                        </Button>
                    </InputGroup>
                    <p className="newsletter-note">Thoughtful updates only. No noise, no spam.</p>
                </div>
            </div>
        </section>
    )
}

export default SignUp;
