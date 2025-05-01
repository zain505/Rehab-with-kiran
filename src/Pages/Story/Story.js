import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Story.css";
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';



function Story() {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <div className="container">
      <div className="hero">
        <div className="caption">
          <h2>Dr. Kiran Fatima</h2>
          <p>Physiotherapist</p>
        </div>
      </div>
      
      <section className="story">
        <h2>Meet The Physiotherapist Doctor</h2>
        <p style={{textAlign:'justify'}}>
        Dr. Kiran Fatima is a dedicated physical therapist based in Lahore, Pakistan. A proud graduate of Riphah International University, she earned both her undergraduate
        and master's degrees in Orthopedic Manual Therapy from the same esteemed institution. Dr. Fatima combines hands-on expertise with a commitment to patient care.
        In addition to her in-person practice, she offers online consultations through various platforms including WhatsApp and Instagram. Recognized for her excellence,
        Dr. Fatima is also a gold medalist in her field. Her approach integrates comprehensive treatment strategies, emphasizing personalized care and holistic well-being.
        </p>
      </section>
      
      <section className="video">
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/mYxcmNs3HOA?si=A9XYh7QQ_z-KiNuB" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> 
      </iframe>
      </section>
      
      <section className="background">
        <h2>My Story</h2>
        <span style={{fontSize:'20px',fontWeight:'bold'}}><FaQuoteLeft/>Transforming pain into progress that's the power of physiotherapy, and it's what drives me every day.<FaQuoteRight/></span><br/>
          <p style={{textAlign:'justify'}}>I am Kiran Fatima, and my journey into the field of physiotherapy has been fueled by passion, dedication, and a commitment to continuous learning.
            I graduated from Riphah University as a gold medalist, where my academic excellence shaped my understanding of human anatomy, movement, and the vital role of rehabilitation in restoring health.
            It was during these years that my passion for physiotherapy truly blossomed, solidifying my decision to pursue this field as my lifelong career.
          </p>
          <p style={{textAlign:'justify'}}>
          After completing my undergraduate studies, I furthered my knowledge by pursuing a Master's in Orthopedic Manual Therapy from Riphah University.
          This program deepened my expertise in musculoskeletal rehabilitation, particularly through hands-on practice to treat orthopedic conditions.
          I learned to combine theoretical knowledge with practical application, designing personalized treatment plans that focus on both pain relief and improved mobility.
          This advanced training helped me refine my skills and approach to physiotherapy with a deeper level of expertise.
          </p>
          <p style={{textAlign:'justify'}}>
          In addition to my academic achievements, I have attended two international conferences on allied health sciences, which allowed me to stay updated with the latest advancements in the field and engage with professionals from around the world.
          </p>
          <p style={{textAlign:'justify'}}>
          With my strong educational background, I have worked in various clinical and rehabilitation settings, always focusing on a patient-centered approach.
          In addition to my work in traditional settings, I have developed a growing passion for telerehabilitation, understanding its power to reach patients remotely and provide effective care through technology.
          My goal is to continue advancing my skills, with the long-term ambition of opening my own clinic and expanding the reach of physiotherapy through innovative telehealth solutions.
          </p>
      </section>
      
      <section className="vision">
        <h2>Vision</h2>
        <p style={{textAlign:'justify'}}>My vision is to empower individuals to overcome pain and regain their mobility through personalized physiotherapy, helping them achieve a better quality of life.
            I am committed to continuous learning, integrating advanced techniques and embracing innovative approaches like telerehabilitation to provide effective care to patients, no matter where they are.
            By staying at the forefront of the latest developments in the field, I aim to make physiotherapy a transformative journey for each individual, fostering long-term health, healing, and progress.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default Story

