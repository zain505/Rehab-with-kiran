import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css"; // Add styles if needed

const Whatsapp = () => {
  let staticMessage = "This is Dr. Kiran How can i help you??"

  return (
    <div className="whatsapp-container">
      <a
        href={`https://api.whatsapp.com/send?phone=+923261997724&text=${staticMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp size={30} color="white" />
      </a>
    </div>
  );
};

export default Whatsapp;
