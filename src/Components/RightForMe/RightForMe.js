import React, { useMemo, useState } from "react";
import "./RightForMe.css";
import Disability from "../../media/disability.png";
import Telehealth from "../../media/telehealth.png";
import FlashSale from "../../media/flash-sale.png";
import Appointment from "../../media/appointment.png";
import Seniors from "../../media/seniors.png";
import Muscle from "../../media/muscle.png";

function RightForMe() {
  // which card is "expanded" on hover (desktop)
  const [activeId, setActiveId] = useState(null);

  const reasons = useMemo(
    () => [
      {
        id: 1,
        className: "reason-1",
        title: "Individuals with Mobility Challenges",
        img: Disability,
        imgAlt: "Disability",
        imgWidth: "50%",
        imgHeight: "50%",
        solution:
          "Those who have difficulty traveling due to physical limitations or disabilities. Empowering independence through accessible innovation.",
      },
      {
        id: 2,
        className: "reason-2",
        title: "Patients in Remote or Rural Areas",
        img: Telehealth,
        imgAlt: "Telehealth",
        imgWidth: "70%",
        imgHeight: "auto",
        solution:
          "Bridging healthcare gaps with remote access and local support. People who live far from specialized physiotherapy clinics.",
      },
      {
        id: 3,
        className: "reason-3",
        title: "Busy Professionals",
        img: FlashSale,
        imgAlt: "Flash Sale",
        imgWidth: "50%",
        imgHeight: "50%",
        solution:
          "Individuals with tight schedules who find it challenging to attend in-person sessions. Streamlining success with efficient solutions for time-pressed professionals.",
      },
      {
        id: 4,
        className: "reason-4",
        title: "Post-Surgery or Injury",
        img: Appointment,
        imgAlt: "Appointment",
        imgWidth: "50%",
        imgHeight: "50%",
        solution:
          "Patients needing follow-up care and monitoring without frequent trips to a clinic.",
      },
      {
        id: 5,
        className: "reason-5",
        title: "Those with Chronic Conditions",
        img: Muscle,
        imgAlt: "Muscle",
        imgWidth: "50%",
        imgHeight: "50%",
        solution:
          "Individuals requiring ongoing management and support for long-term conditions.",
      },
      {
        id: 6,
        className: "reason-6",
        title: "Elderly Individuals (Seniors)",
        img: Seniors,
        imgAlt: "Senior mobility support",
        imgWidth: "50%",
        imgHeight: "50%",
        solution:
          "Safe, guided rehabilitation from home—reducing travel fatigue and fall risk while supporting balance, strength, and mobility with regular check-ins.",
      },
    ],
    []
  );

  // helper: if one item is active in a pair, shrink the other
  const getHeightStyle = (id, pairIds) => {
    if (!activeId) return {};
    const inPair = pairIds.includes(activeId);
    if (!inPair) return {};
    // active card tall, sibling short
    return {
      height: activeId === id ? "500px" : "180px",
    };
  };

  const renderReasonCard = (reason, pairIds) => (
    <div
      key={reason.id}
      id={`reason-${reason.id}`}
      className={reason.className}
      onMouseEnter={() => setActiveId(reason.id)}
      onMouseLeave={() => setActiveId(null)}
      style={getHeightStyle(reason.id, pairIds)}
    >
      <div className="reason-content">
        <div className="problem-area">
          <p className="reason-heading">Problem:</p>
          <p className="reason-header">{reason.title}</p>
        </div>

        <div className="problem-picture">
          <img
            src={reason.img}
            style={{ transform: "scaleX(-1)" }}
            height={reason.imgHeight}
            width={reason.imgWidth}
            alt={reason.imgAlt}
          />
        </div>

        <div className="solution-area">
          <p className="reason-heading">Solution:</p>
          <p className="reason-detail">{reason.solution}</p>
        </div>
      </div>
    </div>
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

        {/* DESKTOP */}
        <div className="right-for-me-reasons">
          <div className="right-for-me-reasons-inner">
            <div className="reason-outer">
              {renderReasonCard(reasons[0], [1, 2])}
              {renderReasonCard(reasons[1], [1, 2])}
            </div>

            <div className="reason-outer">
              {renderReasonCard(reasons[2], [3, 4])}
              {renderReasonCard(reasons[3], [3, 4])}
            </div>

            <div className="reason-outer">
              {renderReasonCard(reasons[4], [5, 6])}
              {renderReasonCard(reasons[5], [5, 6])}
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="right-for-me-reasons-mob">
          {reasons.map((r) => (
            <div className="reason-box" key={r.id}>
              <div className="reason-box-heading">
                <p>{r.title}</p>
              </div>
              <div className="reason-box-picture">
                <img
                  src={r.img}
                  style={{ transform: "scaleX(-1)" }}
                  height={"100%"}
                  width={r.id === 2 ? "60%" : r.id === 1 ? "60%" : "40%"}
                  alt={r.imgAlt}
                />
              </div>
              <div className="reason-box-description">
                <p>{r.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightForMe;
