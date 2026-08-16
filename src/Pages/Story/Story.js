import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import {
  FaArrowRight,
  FaAward,
  FaBookMedical,
  FaChalkboardUser,
  FaGraduationCap,
  FaLaptopMedical,
  FaQuoteLeft,
  FaUserDoctor,
} from "react-icons/fa6";
import portrait from "../../media/4.jpg";
import "./Story.css";

const credentials = [
  { icon: <FaAward />, value: "Gold Medalist", label: "Doctor of Physical Therapy" },
  { icon: <FaGraduationCap />, value: "MS-OMPT", label: "Orthopedic manual therapy" },
  { icon: <FaLaptopMedical />, value: "Telerehabilitation", label: "Accessible, connected care" },
];

const journey = [
  {
    number: "01",
    icon: <FaGraduationCap />,
    label: "Academic foundation",
    title: "Learning the science of movement",
    paragraphs: [
      "I completed my Doctor of Physical Therapy degree in Pakistan and graduated as a Gold Medalist—an achievement that reflects my commitment to academic excellence, continuous learning, and professional development in rehabilitation sciences.",
      "My training built a strong foundation in anatomy, biomechanics, therapeutic exercise, manual therapy, patient assessment, clinical reasoning, and rehabilitation planning. I later completed a Master’s in Orthopedic Manual Physical Therapy, strengthening my expertise in musculoskeletal assessment, clinical decision-making, and evidence-based rehabilitation.",
    ],
  },
  {
    number: "02",
    icon: <FaUserDoctor />,
    label: "Clinical practice",
    title: "Care shaped around the individual",
    paragraphs: [
      "Clinical practice allowed me to translate academic knowledge into thoughtful patient care—from assessment and treatment planning to therapeutic exercise, documentation, rehabilitation, and follow-up.",
      "It also taught me that recovery is never one-size-fits-all. Every person brings different needs, limitations, expectations, and goals. Effective physiotherapy requires clinical competence, careful listening, clear communication, and active patient participation.",
    ],
  },
  {
    number: "03",
    icon: <FaChalkboardUser />,
    label: "Teaching",
    title: "Helping future clinicians think with confidence",
    paragraphs: [
      "After gaining clinical experience, I moved into physiotherapy education and progressed into a university lecturer role. My work includes undergraduate teaching, practical instruction, academic mentoring, clinical supervision, and research guidance.",
      "I believe education should connect theory with real clinical situations. My aim is to help students develop clinical reasoning, professional confidence, ethical responsibility, and the ability to make evidence-based decisions.",
    ],
  },
  {
    number: "04",
    icon: <FaBookMedical />,
    label: "Research",
    title: "Turning questions into better rehabilitation",
    paragraphs: [
      "Research is central to my professional development. My interests include musculoskeletal disorders, orthopedic manual physical therapy, plantar fasciitis, chronic mechanical neck pain, hand function, telerehabilitation, and evidence-based physiotherapy practice.",
      "I have contributed to published research and presented a telerehabilitation abstract at an international conference in Lahore. These experiences continue to shape how I connect scientific evidence with practical, patient-centred care.",
    ],
  },
];

const conferences = [
  "5th International Conference on Rehabilitation Sciences and 2nd International Conference on Allied Health Sciences",
  "4th International Conference on Rehabilitation Sciences and 1st International Conference on Allied Health Sciences",
  "2nd International Conference on Advances in Allied Health Sciences",
];

const platformGoals = [
  "Clear, reliable physiotherapy information",
  "Practical rehabilitation and exercise guidance",
  "Resources for patients and caregivers",
  "Evidence-based approaches to common conditions",
  "Telerehabilitation and remote-support education",
  "Insights from research and clinical practice",
];

function Story() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="story-page">
        <section className="story-hero" aria-labelledby="story-title">
          <div className="story-hero__image"><img src={portrait} alt="Dr. Kiran Fatima, physical therapist, lecturer, and researcher" /></div>
          <div className="story-hero__shade" />
          <div className="story-hero__content">
            <p className="story-eyebrow">The story behind the care</p>
            <h1 id="story-title">From clinical practice<br /><em>to connected care.</em></h1>
            <p className="story-hero__role">Dr. Kiran Fatima · Physical Therapist · Lecturer · Researcher</p>
          </div>
          <span className="story-hero__monogram" aria-hidden="true">KF</span>
        </section>

        <section className="story-credentials" aria-label="Professional highlights">
          {credentials.map((item) => (
            <article className="story-credential" key={item.value}>
              <span className="story-credential__icon" aria-hidden="true">{item.icon}</span>
              <div><strong>{item.value}</strong><span>{item.label}</span></div>
            </article>
          ))}
        </section>

        <section className="story-opening" id="my-story">
          <div className="story-opening__heading">
            <p className="story-kicker">My story</p>
            <h2>Purpose in every step forward.</h2>
          </div>
          <div className="story-opening__copy">
            <p className="story-lead">Every professional journey begins with a purpose. Mine began with a deep interest in human movement, rehabilitation, and the positive impact compassionate, evidence-based care can have on a person’s quality of life.</p>
            <p>I am Dr. Kiran Fatima, a Physical Therapist, Lecturer, and Researcher with a special interest in musculoskeletal rehabilitation, orthopedic manual physical therapy, physiotherapy education, and telerehabilitation.</p>
            <blockquote><FaQuoteLeft aria-hidden="true" /><p>Physiotherapy is not only about managing pain. It helps people regain movement, rebuild independence, and return to the activities that give daily life meaning.</p></blockquote>
          </div>
        </section>

        <section className="story-timeline" aria-label="Dr. Kiran Fatima's professional journey">
          <div className="story-timeline__rail" aria-hidden="true" />
          {journey.map((item) => (
            <article className="story-chapter" key={item.number}>
              <div className="story-chapter__meta">
                <span className="story-chapter__number">{item.number}</span>
                <span className="story-chapter__icon" aria-hidden="true">{item.icon}</span>
                <p>{item.label}</p>
              </div>
              <div className="story-chapter__body">
                <h3>{item.title}</h3>
                {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </section>

        <section className="story-research">
          <div className="story-research__heading">
            <p className="story-kicker">Academic exchange</p>
            <h2>Learning grows when it is shared.</h2>
            <p>International conferences have given me valuable opportunities to engage with clinicians, educators, researchers, and emerging developments across rehabilitation sciences.</p>
          </div>
          <ol className="story-conferences">
            {conferences.map((conference, index) => (
              <li key={conference}><span>0{index + 1}</span><p>{conference}</p></li>
            ))}
          </ol>
        </section>

        <section className="story-tele">
          <div className="story-tele__statement">
            <p className="story-kicker">Why telerehabilitation matters</p>
            <h2>Care should feel closer—even when distance is part of the story.</h2>
          </div>
          <div className="story-tele__copy">
            <p>Distance, transport, work, mobility limitations, cost, or limited access to qualified professionals can interrupt rehabilitation. Used appropriately, telerehabilitation can support education, exercise guidance, progress monitoring, follow-up, and long-term self-management.</p>
            <p>It does not replace every form of in-person physiotherapy. Some conditions require physical examination, hands-on assessment, direct supervision, or medical referral. My goal is to use digital care responsibly—bridging gaps while always respecting those clinical boundaries.</p>
          </div>
        </section>

        <section className="story-platform">
          <div className="story-platform__intro">
            <p className="story-kicker">My vision for this platform</p>
            <h2>Reliable knowledge.<br />Meaningful progress.</h2>
            <p>This website is an accessible space for people to learn about movement, rehabilitation, injury prevention, and evidence-based physiotherapy.</p>
          </div>
          <ul className="story-platform__list">
            {platformGoals.map((goal, index) => <li key={goal}><span>{String(index + 1).padStart(2, "0")}</span>{goal}</li>)}
          </ul>
        </section>

        <section className="story-closing">
          <div>
            <p className="story-kicker">Moving forward</p>
            <h2>Helping people move toward greater independence.</h2>
          </div>
          <div className="story-closing__copy">
            <p>My journey through clinical practice, teaching, research, and telerehabilitation continues to evolve. Every patient, student, project, and professional experience offers a new opportunity to learn and grow.</p>
            <p>Through this platform, I hope to make rehabilitation knowledge more understandable, accessible, and meaningful for everyone.</p>
            <div className="story-signature"><strong>Dr. Kiran Fatima</strong><span>Physical Therapist · Lecturer · Researcher</span></div>
            <a href="#/appointment">Begin your recovery <FaArrowRight aria-hidden="true" /></a>
          </div>
          <span className="story-closing__mark" aria-hidden="true">KF</span>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Story;
