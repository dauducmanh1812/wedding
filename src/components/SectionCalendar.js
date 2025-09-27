import "../assets/styles/03-calendar.scss";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function SectionCalendar() {
  const headingRef = useScrollAnimation();

  return (
    <div className="section section-calendar section-secondary">
      <h1 ref={headingRef} className="heading monsieur-la-doulaise-regular pulse-in">Tháng 11</h1>
      <div className="calendar-grid">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
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
  );
}

export default SectionCalendar;
