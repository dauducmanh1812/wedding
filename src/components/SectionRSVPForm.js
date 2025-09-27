import { useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ModalThankYou from "./ModalThankYou";
import "../assets/styles/07-rsvp-form.scss";

function SectionRSVPForm({ siteData }) {
  const headingRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();
  const countdownRef = useScrollAnimation();

  // State for Modals
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  // State for loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for RSVP Form
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    attending: "",
    guest: "none",
  });

  // State for Countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date(siteData.countdownTarget);
      const now = new Date();
      const difference = targetDate - now;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setCountdown({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Form input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwUB_L79nT6ciXRiwJL-cZ4JAh9NcAOBLyEcUyqCWf5nd_D2yLb1JIM0Rc9JVjRQicU/exec",
        {
          method: "POST",
          mode: "no-cors", // required for Google Apps Script
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setShowThankYouModal(true);
      setFormData({
        name: "",
        message: "",
        attending: "",
        guest: "none",
      });
    } catch (error) {
      console.error("Submission error:", error);
      // Still show thank you even on error, since it might have worked due to no-cors
      setShowThankYouModal(true);
      setFormData({
        name: "",
        message: "",
        attending: "",
        guest: "none",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="section section-rsvp-form eb-garamond-regular">
      <div ref={headingRef} className="fade-in-up">
        <h1 className="confirm-attending">XÁC NHẬN THAM DỰ</h1>
        <p className="confirm-attending-sub">
          Vui lòng xác nhận sự có mặt của bạn để chúng mình <br />
          chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!
        </p>
      </div>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên của bạn"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Gửi lời nhắn đến cô dâu chú rể"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
        ></textarea>
        <select
          name="attending"
          value={formData.attending}
          onChange={handleInputChange}
        >
          <option value="">Bạn sẽ đến chứ?</option>
          <option value="yes">Chắc chắn rồi!</option>
          <option value="no">Tiếc quá, mình không thể đến</option>
        </select>
        <select
          name="guest"
          value={formData.guest}
          onChange={handleInputChange}
        >
          <option value="none">Bạn tham dự cùng ai?</option>
          <option value="alone">Mình đi một mình</option>
          <option value="partner">Mình đi cùng người thương</option>
          <option value="family">Mình đi cùng gia đình</option>
        </select>
        <button
          ref={buttonRef}
          type="submit"
          className="submit-btn fade-in-up"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner"></span>
            </>
          ) : (
            "GỬI LỜI NHẮN"
          )}
        </button>
      </form>

      <div ref={countdownRef} className="fade-in-up">
        <h2 className="monsieur-la-doulaise-regular countdown-heading">
          Countdown
        </h2>
        <h2 className="countdown-numbers">
          {countdown.days}:{countdown.hours}:{countdown.minutes}:
          {countdown.seconds}
        </h2>
      </div>

      {showThankYouModal && (
        <ModalThankYou
          onClose={() => setShowThankYouModal(false)}
          siteData={siteData}
        />
      )}
    </div>
  );
}

export default SectionRSVPForm;
