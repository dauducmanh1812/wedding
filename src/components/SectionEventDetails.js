import "../assets/styles/05-event-details.scss";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import eventDetailsIcon1 from "../assets/images/05-event-details/icon1-optimized.webp";
import eventDetailsIcon2 from "../assets/images/05-event-details/icon2-optimized.webp";
import eventDetailsIcon3 from "../assets/images/05-event-details/icon3-optimized.webp";

function SectionEventDetails({ siteData }) {
  const icon1Ref = useScrollAnimation();
  const eventTimeRef = useScrollAnimation();
  const weekdayRef = useScrollAnimation();
  const dayRef = useScrollAnimation();
  const monthRef = useScrollAnimation();
  const yearRef = useScrollAnimation();
  const lunarDateRef = useScrollAnimation();
  const icon2Ref = useScrollAnimation();
  const venuesRef = useScrollAnimation();
  const addressRef = useScrollAnimation();

  return (
    <div className="section section-event-details">
      <img ref={icon1Ref} className="fade-in-up" src={eventDetailsIcon1} width={180} alt="Event Details Icon1" />
      <h1 ref={eventTimeRef} className="event-time fade-in-up">
        TIỆC NHÀ GÁI ĐƯỢC TỔ CHỨC <br />
        VÀO LÚC {siteData.event.time}
      </h1>

      <h1 ref={weekdayRef} className="event-dining-weekday fade-in-up">{siteData.event.dining.weekday}</h1>

      <div className="date-container">
        <div>
          <h1 ref={monthRef} className="month fade-in-right">{siteData.event.dining.month}</h1>
        </div>
        <h1 ref={dayRef} className="day fade-in-up">{siteData.event.dining.day}</h1>
        <div>
          <h1 ref={yearRef} className="year fade-in-right">{siteData.event.dining.year}</h1>
        </div>
      </div>

      <h3 ref={lunarDateRef} className="lunar-date eb-garamond-regular fade-in-up">
        {siteData.event.lunarDate}
      </h3>

      <img
        ref={icon2Ref}
        className="img-icon2 fade-in-up"
        src={eventDetailsIcon2}
        width={70}
        alt="Event Details Icon2"
      />

      <div ref={venuesRef} className="fade-in-up">
        <h1 className="venue venue-first">
          TẠI {siteData.event.venue.toUpperCase()}
        </h1>
        {siteData.event.venue_sub && (
          <h1 className="venue venue-second">
            {siteData.event.venue_sub.toUpperCase()}
          </h1>
        )}
      </div>

      <h4 ref={addressRef} className="eb-garamond-regular address-h4 fade-in-up">
        Địa chỉ: {siteData.event.address}
      </h4>

      <a
        className="map-guide"
        href={siteData.event.gg_address}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={eventDetailsIcon3}
          width={40}
          height={40}
          alt="Event Details Icon2"
        />
        <h1>CHỈ ĐƯỜNG</h1>
      </a>
    </div>
  );
}

export default SectionEventDetails;
