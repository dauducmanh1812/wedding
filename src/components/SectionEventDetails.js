import "../assets/styles/05-event-details.scss";

import eventDetailsIcon1 from "../assets/images/05-event-details/icon1.png";
import eventDetailsIcon2 from "../assets/images/05-event-details/icon2.png";
import eventDetailsIcon3 from "../assets/images/05-event-details/icon3.png";

function SectionEventDetails({ siteData }) {
  return (
    <div className="section section-event-details">
      <img src={eventDetailsIcon1} width={180} alt="Event Details Icon1" />
      <h1 className="event-time">
        TIỆC NHÀ GÁI ĐƯỢC TỔ CHỨC <br />
        VÀO LÚC {siteData.event.time}
      </h1>

      <h1 className="event-dining-weekday">{siteData.event.dining.weekday}</h1>

      <div className="date-container">
        <div>
          <h1 className="month">{siteData.event.dining.month}</h1>
        </div>
        <h1 className="day">{siteData.event.dining.day}</h1>
        <div>
          <h1 className="year">{siteData.event.dining.year}</h1>
        </div>
      </div>

      <h3 className="lunar-date eb-garamond-regular">
        {siteData.event.lunarDate}
      </h3>

      <img
        className="img-icon2"
        src={eventDetailsIcon2}
        width={70}
        alt="Event Details Icon2"
      />

      <h1 className="venue venue-first">
        TẠI {siteData.event.venue.toUpperCase()}
      </h1>
      <h1 className="venue venue-second">
        {siteData.event.venue_sub.toUpperCase()}
      </h1>

      <h3 className="eb-garamond-regular address-h3">
        Địa chỉ: {siteData.event.address}
      </h3>

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
