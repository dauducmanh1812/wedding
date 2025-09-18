import { useState, useEffect, useRef } from "react";
import "./App.css";
import siteData from "./data.json";
// import thankYouBg from './assets/thank-you-bg.jpg';

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
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      {/* --- AUDIO --- */}
      {/* <audio ref={audioRef} src="/audio/background-music.mp3" loop />
      <button onClick={toggleAudio} style={{ position: 'fixed', top: 20, right: 20, zIndex: 1001 }}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button> */}

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <h1 styles="">{siteData.couple.shortName}</h1>
      </section>

      {/* --- SAVE THE DATE --- */}
      <section className="section save-the-date-section">
        <h2>QUYẾT ĐỊNH BÊN NHAU TRỌN ĐỜI</h2>
        <p className="script-font">Save the date</p>
        <p className="date">{siteData.event.date}</p>
        <img src="/images/save-the-date/couple-1.jpg" alt="Couple" />
      </section>

      {/* --- CALENDAR --- */}
      <section className="section dark-bg">
        <p className="script-font">Tháng 11</p>
        <div className="calendar-grid">
          {["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"].map((day) => (
            <div key={day} className="day-name">
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
              className={`date-number ${i + 1 === 2 ? "highlight" : ""}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* --- INVITATION --- */}
      <section className="section">
        <h2>THÂN MỜI TỚI DỰ LỄ CƯỚI THÂN MẬT CỦA CHÚNG TÔI</h2>
        {/* Bride and Groom Info */}
        <h1 className="script-font" style={{ fontSize: "3.5rem" }}>
          {siteData.couple.bride}
        </h1>
        <h1 className="script-font" style={{ fontSize: "3.5rem" }}>
          {siteData.couple.groom}
        </h1>
        {/* Family Info */}
        <div className="family-container">
          <div className="family-side">
            <h3>{siteData.family.brideSide.title}</h3>
            <p>{siteData.family.brideSide.father}</p>
            <p>{siteData.family.brideSide.mother}</p>
            <p>{siteData.family.brideSide.city}</p>
          </div>
          <div className="family-side">
            <h3>{siteData.family.groomSide.title}</h3>
            <p>{siteData.family.groomSide.father}</p>
            <p>{siteData.family.groomSide.mother}</p>
            <p>{siteData.family.groomSide.city}</p>
          </div>
        </div>
      </section>

      {/* --- EVENT DETAILS --- */}
      <section className="section">
        <h2>TIỆC NHÀ GÁI ĐƯỢC TỔ CHỨC</h2>
        <h3>VÀO LÚC {siteData.event.time}</h3>
        <h2>{siteData.event.fullDate}</h2>
        <p>({siteData.event.lunarDate})</p>
        <h3>{siteData.event.venue}</h3>
        <p>{siteData.event.address}</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            siteData.event.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          CHỈ ĐƯỜNG
        </a>
      </section>

      {/* --- TIMELINE --- */}
      <section className="section">
        <h2 className="script-font">Timeline</h2>
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
      <section className="section dark-bg">
        <h2 className="script-font">Countdown</h2>
        <div className="countdown">
          {countdown.days}:{countdown.hours}:{countdown.minutes}:
          {countdown.seconds}
        </div>
      </section>

      {/* --- FINAL THANK YOU SECTION --- */}
      <section
        className="thank-you-section"
        // style={{ backgroundImage: `url(${thankYouBg})` }} // <-- THAY ĐỔI DÒNG NÀY
      >
        <div className="thank-you-content">
          <p>{siteData.thankYou.message}</p>
          <p className="script-font">{siteData.thankYou.signature}</p>
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
            <h3 className="script-font">Thank you!</h3>
            <p>
              Những lời chúc này sẽ là động lực rất lớn giúp chúng mình bước vào
              một cánh cửa hôn nhân đầy mới mẻ.
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
  );
}

export default App;
