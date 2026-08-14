import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'
import { MdArrowOutward, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { ImFacebook, ImInstagram } from 'react-icons/im'

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
              <a href='https://www.facebook.com/share/1EaArVeGVy/' target='_blank' rel='noreferrer' aria-label='Facebook'>
                <ImFacebook />
              </a>
              <a href='https://www.instagram.com/dr_kiran_fatima?igsh=MW8yd3YxdW1pZG5uOQ==' target='_blank' rel='noreferrer' aria-label='Instagram'>
                <ImInstagram />
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

            <a className='contact-detail' href='https://maps.google.com/?q=AWT+Phase+2+Lahore+Pakistan' target='_blank' rel='noreferrer'>
              <span className='contact-detail-icon'><MdLocationOn aria-hidden='true' /></span>
              <span className='contact-detail-copy'>
                <span className='contact-detail-label'>Visit us</span>
                <strong>AWT, Phase 2</strong>
                <small>Lahore, Pakistan</small>
              </span>
              <MdArrowOutward className='contact-detail-arrow' aria-hidden='true' />
            </a>
          </div>
        </section>

        <section className='contact-location' aria-label='Clinic location'>
          <div className='contact-location-copy'>
            <span className='contact-eyebrow'>Find us in Lahore</span>
            <h2>A calm space for your recovery.</h2>
            <p>Located in AWT Phase 2, with appointments arranged in advance.</p>
            <a href='https://maps.google.com/?q=AWT+Phase+2+Lahore+Pakistan' target='_blank' rel='noreferrer'>
              Open in Google Maps <MdArrowOutward aria-hidden='true' />
            </a>
          </div>
          <div className='map-container'>
            <iframe
              title='Rehab with Kiran location in AWT Phase 2, Lahore'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4681.185086737966!2d74.21055619363634!3d31.356469014049722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918554c8bc8b561%3A0x3ceb3cce728d2a39!2sAwt%20Housing%20Scheme%20Phase%202%20AWT%20Phase%202%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1772380116240!5m2!1sen!2sus'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact
