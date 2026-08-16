import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'
import { MdArrowOutward, MdEmail, MdPhone, MdVideoCall } from 'react-icons/md'
import { ImFacebook, ImInstagram, ImLinkedin } from 'react-icons/im'

function Contact() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className='contact-page'>
        <header className='contact-hero'>
          <span className='contact-eyebrow'>We’re here to help</span>
          <h1 className='contact-heading'>Let’s start your journey<br />to feeling better.</h1>
          <p>
            Have a question or want to book a virtual appointment? Reach out in the
            way that suits you best and we’ll get back to you shortly.
          </p>
        </header>

        <section className='contact-layout' aria-label='Contact details'>
          <article className='contact-feature'>
            <span className='contact-feature-label'>Virtual consultations</span>
            <h2>Care and guidance,<br />wherever you are.</h2>
            <p>
              Speak with Dr. Kiran about your concerns and find the right next step
              for your recovery.
            </p>
            <a className='contact-primary-action' href='mailto:rehabwithkiran@gmail.com?subject=Virtual appointment enquiry'>
              Request an appointment <MdArrowOutward aria-hidden='true' />
            </a>
            <div className='contact-socials' aria-label='Social media'>
              <span>Follow along</span>
              <a href='https://www.facebook.com/share/1Hjyke8qp5/' target='_blank' rel='noreferrer' aria-label='Facebook'>
                <ImFacebook />
              </a>
              <a href='https://www.instagram.com/dr_kiran_fatima?igsh=MW8yd3YxdW1pZG5uOQ==' target='_blank' rel='noreferrer' aria-label='Instagram'>
                <ImInstagram />
              </a>
              <a href='https://www.linkedin.com/in/kiran-fatima-kf30' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                <ImLinkedin />
              </a>
            </div>
          </article>

          <div className='contact-details'>
            <a className='contact-detail' href='tel:+923261997724'>
              <span className='contact-detail-icon'><MdPhone aria-hidden='true' /></span>
              <span className='contact-detail-copy'>
                <span className='contact-detail-label'>Call us</span>
                <strong>+92 326 1997 724</strong>
                <small>Tap to call</small>
              </span>
              <MdArrowOutward className='contact-detail-arrow' aria-hidden='true' />
            </a>

            <a className='contact-detail' href='mailto:rehabwithkiran@gmail.com'>
              <span className='contact-detail-icon'><MdEmail aria-hidden='true' /></span>
              <span className='contact-detail-copy'>
                <span className='contact-detail-label'>Email us</span>
                <strong>rehabwithkiran@gmail.com</strong>
                <small>We usually reply within one business day</small>
              </span>
              <MdArrowOutward className='contact-detail-arrow' aria-hidden='true' />
            </a>

            <a className='contact-detail' href='#/appointment'>
              <span className='contact-detail-icon'><MdVideoCall aria-hidden='true' /></span>
              <span className='contact-detail-copy'>
                <span className='contact-detail-label'>Meet online</span>
                <strong>Zoom or Google Meet</strong>
                <small>Lahore, Pakistan</small>
              </span>
              <MdArrowOutward className='contact-detail-arrow' aria-hidden='true' />
            </a>
          </div>
        </section>

        <section className='contact-location' aria-label='Online physiotherapy service'>
          <div className='contact-location-copy'>
            <span className='contact-eyebrow'>Physiotherapy from home</span>
            <h2>Expert guidance, wherever you are.</h2>
            <p>Connect with Dr. Kiran Fatima through Zoom or Google Meet for personalized online physiotherapy and telerehabilitation.</p>
            <a href='#/appointment'>
              Request an online appointment <MdArrowOutward aria-hidden='true' />
            </a>
          </div>
          <div className='map-container contact-location-copy'>
            <MdVideoCall aria-hidden='true' size='72' />
            <h2>Lahore, Pakistan</h2>
            <p>Appointments are delivered virtually; there is no walk-in clinic location.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact
