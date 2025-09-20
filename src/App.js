import { useState, useEffect, useRef } from "react";
import "./App.scss";
import siteData from "./data.json";

import eventDetailsIcon2 from "./assets/images/event-details/icon2.png";
import eventDetailsIcon3 from "./assets/images/event-details/icon3.png";

function App() {
  // State for Modals
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showGiftingModal, setShowGiftingModal] = useState(false);

  // State for RSVP Form
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    attending: "yes",
    guest: "none",
    invitedBy: "bride",
  });

  // State for Countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Ref for Audio
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    try {
      const response = await fetch("/api/submit-wish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowThankYouModal(true);
        setFormData({
          name: "",
          message: "",
          attending: "yes",
          guest: "none",
          invitedBy: "bride",
        }); // Reset form
      } else {
        alert("Đã có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Không thể kết nối đến máy chủ.");
    }
  };

  // Audio toggle handler
  const toggleAudio = () => {
    if (isPlaying === false) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="wedding-invitation" onClick={toggleAudio}>
      {/* --- AUDIO --- */}
      <audio ref={audioRef} src="/audio/background-music.mp3" loop />

      <div className="wedding-invitation-section">
        {/* --- 01_HERO --- */}
        <div className="section section-hero">
          <div class="element-transtion arcittya-begatri">
            <h1>{siteData.couple.shortName_bride.toUpperCase()}</h1>
            <div class="section-hero_groom">
              <span>&</span>{" "}
              <h1>{siteData.couple.shortName_groom.toUpperCase()}</h1>
            </div>
          </div>
        </div>

        {/* --- 02_SAVE THE DATE --- */}
        <div className="section section-save-the-date">
          <h2>
            QUYẾT ĐỊNH BÊN NHAU <br />
            TRỌN ĐỜI
          </h2>
          <p className="monsieur-la-doulaise-regular">Save the date</p>
          <p className="date">{siteData.event.date}</p>
          <img src="/images/save-the-date/couple-1.jpg" alt="Couple" />
        </div>

        {/* --- 03_CALENDAR --- */}
        <div className="section section-calendar section-secondary">
          <p className="monsieur-la-doulaise-regular">Tháng 11</p>
          <div className="calendar-grid">
            {["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"].map((day) => (
              <div key={day} className="day-name open-sans-light">
                {day}
              </div>
            ))}
            {/* This is a simplified calendar view for May 2025 */}
            {[...Array(5).keys()].map((i) => (
              <div key={`empty-${i}`}></div>
            ))}
            {[...Array(30).keys()].map((i) => (
              <div
                key={i}
                className={`date-number ${i + 1 === 1 ? "highlight" : ""}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* --- 04_INVITATION --- */}
        <div
          className="section section-invitation"
          style={{
            backgroundImage: `url("/images/background2.jpg")`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <h2>
              THÂN MỜI TỚI DỰ <br /> LỄ CƯỚI CỦA CHÚNG TÔI
            </h2>
          </div>
          {/* Bride and Groom Info */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 class="text-and">{"&".toUpperCase()}</h1>
            <h1 style={{ margin: 15 }}>
              {siteData.couple.bride.toUpperCase()}
            </h1>
            <h1 style={{ margin: 15 }}>
              {siteData.couple.groom.toUpperCase()}
            </h1>
          </div>

          {/* Bride and Groom Image */}
          <div className="photo-gallery-container">
            {/* Groom's Photo */}
            <div className="polaroid photo-one">
              <img
                src="/images/invitation/qr-1.png"
                alt="Groom in a grey suit"
              />
            </div>

            {/* Bride's Photo */}
            <div className="polaroid photo-two">
              <img src="/images/invitation/qr-1.png" alt="Bride with a veil" />
            </div>
          </div>

          {/* Family Info */}
          <div className="family-container">
            <div className="family-side">
              <h1 class="family-title">{siteData.family.brideSide.title}</h1>
              <h2>
                {siteData.family.brideSide.father} <br />
                {siteData.family.brideSide.mother} <br />
                {siteData.family.brideSide.city}
              </h2>
            </div>
            <div className="family-side">
              <h1 class="family-title">{siteData.family.groomSide.title}</h1>
              <h2>
                {siteData.family.groomSide.father}
                <br />
                {siteData.family.groomSide.mother}
                <br />
                {siteData.family.groomSide.city}
              </h2>
            </div>
          </div>
        </div>

        {/* --- 05_EVENT DETAILS --- */}
        <div
          className="section section-event-details"
          style={{
            paddingTop: 0,
            backgroundImage: `url("/images/background2.jpg")`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/images/event-details/icon1.png"
            width={250}
            alt="Event Details Icon1"
          />
          <h1>
            TIỆC NHÀ GÁI ĐƯỢC TỔ CHỨC <br />
            VÀO LÚC {siteData.event.time}
          </h1>

          <h1>{siteData.event.dining.weekday}</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1 class="month">{siteData.event.dining.month}</h1>
            </div>
            <h1 class="day">{siteData.event.dining.day}</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1 class="year">{siteData.event.dining.year}</h1>
            </div>
          </div>

          <h2 style={{ margin: "10px" }}>{siteData.event.lunarDate}</h2>

          <img
            style={{ margin: "20px" }}
            src={eventDetailsIcon2}
            width={100}
            alt="Event Details Icon2"
          />

          <h1 style={{ margin: "10px" }}>
            {siteData.event.venue.toUpperCase()}
          </h1>
          <p
            class="eb-garamond-regular"
            style={{ fontSize: "20px", margin: "10px" }}
          >
            Địa chỉ: {siteData.event.address}
          </p>

          <a
            className="map-guide"
            href={siteData.event.gg_address}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={eventDetailsIcon3} width={40} height={40} alt="Event Details Icon2" />
            <h1>CHỈ ĐƯỜNG</h1>
          </a>
        </div>

        {/* --- TIMELINE --- */}
        <section className="section">
          <h2>Timeline</h2>
          <div>
            {siteData.timeline.map((item) => (
              <div key={item.time} className="timeline-item">
                {/* You can add icons here */}
                <div>
                  <h3>
                    {item.time} - {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* --- RSVP FORM --- */}
        <section className="section">
          <h2>Gửi lời chúc</h2>
          <p>
            Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một
            cách chu đáo nhất. Trân trọng!
          </p>
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
              <option value="yes">Bạn sẽ đến chứ?</option>
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
            <select
              name="invitedBy"
              value={formData.invitedBy}
              onChange={handleInputChange}
            >
              <option value="bride">Bạn là khách mời của ai?</option>
              <option value="bride">Cô dâu</option>
              <option value="groom">Chú rể</option>
            </select>
            <button type="submit" className="submit-btn">
              GỬI LỜI NHẮN
            </button>
            <button
              type="button"
              className="gifting-btn"
              onClick={() => setShowGiftingModal(true)}
            >
              MỪNG CƯỚI
            </button>
          </form>
        </section>
        {/* --- COUNTDOWN --- */}
        <section className="section section-secondary">
          <h2>Countdown</h2>
          <div className="countdown">
            {countdown.days}:{countdown.hours}:{countdown.minutes}:
            {countdown.seconds}
          </div>
        </section>
        {/* --- FINAL THANK YOU SECTION --- */}
        <section
          className="thank-you-section"
          style={{ backgroundImage: `url('/images/modals/thank-you-bg.jpg')` }}
        >
          <div className="thank-you-content">
            <p>{siteData.thankYou.message}</p>
            <p>{siteData.thankYou.signature}</p>
          </div>
        </section>
        {/* --- MODALS --- */}
        {showThankYouModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowThankYouModal(false)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setShowThankYouModal(false)}
              >
                &times;
              </button>
              <h3>Thank you!</h3>
              <p>
                Những lời chúc này sẽ là động lực rất lớn giúp chúng mình bước
                vào một cánh cửa hôn nhân đầy mới mẻ.
              </p>
              <img src="/images/modals/thank-you-bg.jpg" alt="Thank you" />
              <p>{siteData.event.date}</p>
            </div>
          </div>
        )}
        {showGiftingModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowGiftingModal(false)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setShowGiftingModal(false)}
              >
                &times;
              </button>
              <h3>Mừng cưới</h3>
              <div className="gifting-modal-content">
                <div className="qr-code-container">
                  <img src={siteData.gifting.account1.qr} alt="QR Code 1" />
                  <p>
                    <strong>{siteData.gifting.account1.name}</strong>
                  </p>
                  <p>{siteData.gifting.account1.bank}</p>
                  <p>{siteData.gifting.account1.number}</p>
                </div>
                <div className="qr-code-container">
                  <img src={siteData.gifting.account2.qr} alt="QR Code 2" />
                  <p>
                    <strong>{siteData.gifting.account2.name}</strong>
                  </p>
                  <p>{siteData.gifting.account2.bank}</p>
                  <p>{siteData.gifting.account2.number}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
