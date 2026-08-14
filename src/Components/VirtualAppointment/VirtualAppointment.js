import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemeet, SiZoom } from "react-icons/si";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./VirtualAppointment.css";

const whatsappMessage = encodeURIComponent("This is Dr. Kiran. How can I help you?");

const platforms = [
  {
    name: "WhatsApp",
    description: "Chat with us to arrange your virtual appointment.",
    href: `https://api.whatsapp.com/send?phone=923261997724&text=${whatsappMessage}`,
    icon: FaWhatsapp,
    className: "whatsapp",
  },
  {
    name: "Zoom",
    description: "Connect with us through a secure Zoom video session.",
    href: "https://zoom.us/",
    icon: SiZoom,
    className: "zoom",
  },
  {
    name: "Google Meet",
    description: "Join your online consultation using Google Meet.",
    href: "https://meet.google.com/",
    icon: SiGooglemeet,
    className: "google-meet",
  },
];

function VirtalAppointment() {
  return (
    <section className="appointment-wrapper" aria-labelledby="virtual-appointment-heading">
      <ScrollToTop />
      <div className="header">
        <p id="virtual-appointment-heading">Virtual Appointments Available!</p>
      </div>
      <div className="slogan">
        <p>We&apos;re virtually available on every platform.</p>
      </div>
      <div className="virtual-platform-grid">
        {platforms.map(({ name, description, href, icon: Icon, className }) => (
          <a
            key={name}
            className={`virtual-platform-card virtual-platform-card--${className}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name} in a new tab`}
          >
            <span className="virtual-platform-icon" aria-hidden="true">
              <Icon />
            </span>
            <h3>{name}</h3>
            <p>{description}</p>
            <span className="virtual-platform-link" aria-hidden="true">
              Connect now <span>↗</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default VirtalAppointment;
