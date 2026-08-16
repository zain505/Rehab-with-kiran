import React from "react";
import { Link } from "react-router-dom";
import { FaChild, FaUserFriends } from "react-icons/fa";
import "./ConsultationFee.css";

const feeOptions = [
  {
    title: "Elders / Adults",
    price: "PKR 5,000",
    duration: "30–45 min session",
    icon: FaUserFriends,
  },
  {
    title: "Kids",
    price: "PKR 3,000",
    duration: "30–45 min session",
    icon: FaChild,
  },
];

function ConsultationFee({ compact = false }) {
  return (
    <section
      className={`consultation-fee${compact ? " consultation-fee--compact" : ""}`}
      aria-labelledby={compact ? "home-consultation-fee-heading" : "consultation-fee-heading"}
    >
      <div className="consultation-fee__content">
        <p className="consultation-fee__eyebrow">Simple, transparent pricing</p>
        <h1 id={compact ? "home-consultation-fee-heading" : "consultation-fee-heading"}>
          Consultation Fee
        </h1>
        <p className="consultation-fee__intro">
          Choose the online physiotherapy consultation that fits your family&apos;s needs.
        </p>

        <div className="consultation-fee__grid">
          {feeOptions.map(({ title, price, duration, icon: Icon }) => (
            <article className="consultation-fee__card" key={title}>
              <span className="consultation-fee__icon" aria-hidden="true"><Icon /></span>
              <h2>{title}</h2>
              <p className="consultation-fee__price">{price}</p>
              <p className="consultation-fee__duration">for a {duration}</p>
            </article>
          ))}
        </div>

        <div className="consultation-fee__note">
          <span aria-hidden="true">i</span>
          <p>Planning weekly or monthly sessions? We can negotiate a package according to your needs.</p>
        </div>

        <Link className="consultation-fee__button" to="/appointment">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}

export default ConsultationFee;
