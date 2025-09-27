import "../assets/styles/_modals.scss";
import thankYouImage from "../assets/images/08-thank-you/1-optimized.webp";

function ModalThankYou({ onClose, siteData }) {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Section 0: Close Button */}
          <div>
            <button className="modal-close-btn" onClick={onClose}>
              &times;
            </button>
          </div>

          {/* Section 1: BEST DAY EVER */}
          <div className="best-text">BEST</div>
          <div className="day-text">DAY</div>
          <div className="ever-text">EVER</div>

          <div className="our-memories-line"></div>

          {/* Section 2: Thank You */}
          <div className="thank-you-text signature">Thank you</div>

          {/* Section 3: Image */}
          <img src={thankYouImage} alt="Thank You" style={{ height: "30vh", aspectRatio: "20 / 30", objectFit: "cover" }} />

          {/* Section 4: Message */}
          <div className="modal-message">{siteData.modal.thankYou}</div>

          {/* Section 5: Date */}
          <div className="modal-date">{siteData.event.date}</div>
        </div>
      </div>
    </>
  );
}

export default ModalThankYou;
