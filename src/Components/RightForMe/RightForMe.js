import React, { useMemo } from "react";
import "./RightForMe.css";
import Disability from "../../media/disability.png";
import Telehealth from "../../media/telehealth.png";
import FlashSale from "../../media/flash-sale.png";
import Appointment from "../../media/appointment.png";
import Seniors from "../../media/seniors.png";
import Muscle from "../../media/muscle.png";

function RightForMe() {
  const reasons = useMemo(
    () => [
      {
        id: 1,
        className: "reason-1",
        title: "Individuals with Mobility Challenges",
        img: Disability,
        imgAlt: "Disability",
        solution:
          "Those who have difficulty traveling due to physical limitations or disabilities. Empowering independence through accessible innovation.",
      },
      {
        id: 2,
        className: "reason-2",
        title: "Patients in Remote or Rural Areas",
        img: Telehealth,
        imgAlt: "Telehealth",
        solution:
          "Bridging healthcare gaps with remote access and local support. People who live far from specialized physiotherapy clinics.",
      },
      {
        id: 3,
        className: "reason-3",
        title: "Busy Professionals",
        img: FlashSale,
        imgAlt: "Flash Sale",
        solution:
          "Individuals with tight schedules who find it challenging to attend in-person sessions. Streamlining success with efficient solutions for time-pressed professionals.",
      },
      {
        id: 4,
        className: "reason-4",
        title: "Post-Surgery or Injury",
        img: Appointment,
        imgAlt: "Appointment",
        solution:
          "Patients needing follow-up care and monitoring without frequent trips to a clinic.",
      },
      {
        id: 5,
        className: "reason-5",
        title: "Those with Chronic Conditions",
        img: Muscle,
        imgAlt: "Muscle",
        solution:
          "Individuals requiring ongoing management and support for long-term conditions.",
      },
      {
        id: 6,
        className: "reason-6",
        title: "Elderly Individuals (Seniors)",
        img: Seniors,
        imgAlt: "Senior mobility support",
        solution:
          "Safe, guided rehabilitation from home—reducing travel fatigue and fall risk while supporting balance, strength, and mobility with regular check-ins.",
      },
    ],
    []
  );

  const renderReasonCard = (reason) => (
    <article
      key={reason.id}
      id={`reason-${reason.id}`}
      className={`reason-card ${reason.className}`}
      tabIndex="0"
    >
      <div className="reason-content">
        <div className="problem-area">
          <p className="reason-heading">Problem:</p>
          <p className="reason-header">{reason.title}</p>
        </div>

        <div className="problem-picture">
          <img src={reason.img} alt={reason.imgAlt} />
        </div>

        <div className="solution-area">
          <p className="reason-heading">Solution:</p>
          <p className="reason-detail">{reason.solution}</p>
        </div>
      </div>
    </article>
  );

  return (
    <div className="right-for-me-section">
      <div className="right-for-me-section-inner">
        <div className="right-for-me-heading-area">
          <p className="right-for-me-heading">Are you the right candidate?</p>
          <p className="right-for-me-slogan">
            The best candidates for telerehabilitation in physiotherapy include
          </p>
        </div>

        <div className="right-for-me-reasons">
          <div className="right-for-me-reasons-inner">
            {reasons.map(renderReasonCard)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightForMe;
