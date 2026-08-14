import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { FaArrowRight, FaAward, FaGraduationCap, FaQuoteLeft, FaVideo } from "react-icons/fa6";
import portrait from "../../media/4.jpeg";
import "./Story.css";

const credentials = [
  { icon: <FaAward />, value: "Gold medalist", label: "Academic excellence" },
  { icon: <FaGraduationCap />, value: "MSc. OMT", label: "Orthopedic manual therapy" },
  { icon: <FaVideo />, value: "Online care", label: "Accessible worldwide" },
];

function Story() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="story-page">
        <section className="story-hero" aria-labelledby="story-title">
          <div className="story-hero__image">
            <img src={portrait} alt="Dr. Kiran Fatima, physiotherapist" />
          </div>
          <div className="story-hero__shade" />
          <div className="story-hero__content">
            <p className="story-eyebrow">The story behind the care</p>
            <h1 id="story-title">Dr. Kiran<br />Fatima</h1>
            <p className="story-hero__role">Physiotherapist · Gold medalist · Rehabilitation advocate</p>
            <a className="story-hero__link" href="#my-story">
              Discover my journey <FaArrowRight aria-hidden="true" />
            </a>
          </div>
          <p className="story-hero__number" aria-hidden="true">01</p>
        </section>

        <section className="story-credentials" aria-label="Professional highlights">
          {credentials.map((item) => (
            <article className="story-credential" key={item.value}>
              <span className="story-credential__icon" aria-hidden="true">{item.icon}</span>
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="story-intro">
          <div className="story-intro__copy">
            <p className="story-kicker">Meet your physiotherapist</p>
            <h2>Clinical expertise,<br />delivered with empathy.</h2>
            <p className="story-lead">
              Dr. Kiran Fatima is a dedicated physical therapist based in Lahore, Pakistan. A proud graduate of Riphah International University, she earned both her undergraduate degree and master&apos;s in Orthopedic Manual Therapy from the same esteemed institution.
            </p>
            <p>
              She combines hands-on expertise with compassionate, personalized care. Alongside her in-person practice, Dr. Fatima offers online consultations through WhatsApp and Instagram—making thoughtful rehabilitation more accessible, wherever her patients may be.
            </p>
          </div>

          <div className="story-film">
            <div className="story-film__topline">
              <span>Meet Dr. Kiran</span>
              <span>Introduction film · 03:12</span>
            </div>
            <div className="story-film__frame">
              <iframe
                src="https://www.youtube.com/embed/mYxcmNs3HOA?si=A9XYh7QQ_z-KiNuB"
                title="Dr. Kiran Fatima introduction video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="story-journey" id="my-story">
          <aside className="story-journey__aside">
            <p className="story-kicker">My story</p>
            <h2>Purpose in every<br />step forward.</h2>
            <blockquote>
              <FaQuoteLeft aria-hidden="true" />
              <p>Transforming pain into progress—that is the power of physiotherapy, and what drives me every day.</p>
            </blockquote>
          </aside>

          <div className="story-journey__copy">
            <p className="story-dropcap">
              I am Kiran Fatima, and my journey into physiotherapy has been shaped by passion, dedication, and a commitment to continuous learning. I graduated from Riphah University as a gold medalist, where academic excellence deepened my understanding of human anatomy, movement, and rehabilitation&apos;s vital role in restoring health.
            </p>
            <p>
              After completing my undergraduate studies, I pursued a Master&apos;s in Orthopedic Manual Therapy at Riphah University. The program strengthened my expertise in musculoskeletal rehabilitation and taught me to unite sound clinical knowledge with hands-on practice—creating personalized treatment plans focused on pain relief and better mobility.
            </p>
            <p>
              I have also attended two international conferences on allied health sciences, keeping me connected to the latest advances and to professionals from around the world.
            </p>
            <p>
              Across clinical and rehabilitation settings, my approach has always remained patient-centered. I am especially passionate about telerehabilitation and its ability to bring effective care to people through technology. My ambition is to continue advancing my skills, open my own clinic, and expand the reach of physiotherapy through innovative telehealth solutions.
            </p>
          </div>
        </section>

        <section className="story-vision">
          <div>
            <p className="story-kicker">Looking ahead</p>
            <h2>A future where movement feels possible again.</h2>
          </div>
          <div className="story-vision__copy">
            <p>
              My vision is to empower individuals to overcome pain and regain mobility through personalized physiotherapy—helping each person move toward a better quality of life.
            </p>
            <p>
              By combining continuous learning, advanced techniques, and approaches such as telerehabilitation, I aim to make physiotherapy a transformative journey toward lasting health, healing, and progress.
            </p>
            <a href="#/appointment">Begin your recovery <FaArrowRight aria-hidden="true" /></a>
          </div>
          <span className="story-vision__mark" aria-hidden="true">KF</span>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Story;
