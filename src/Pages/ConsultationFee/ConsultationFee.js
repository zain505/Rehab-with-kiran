import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ConsultationFeeSection from "../../Components/ConsultationFee/ConsultationFee";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

function ConsultationFee() {
  return (
    <div className="consultation-fee-page">
      <ScrollToTop />
      <Navbar />
      <ConsultationFeeSection />
      <Footer />
    </div>
  );
}

export default ConsultationFee;
