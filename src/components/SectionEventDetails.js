import "../assets/styles/05-event-details.scss";

import eventDetailsIcon2 from "../assets/images/event-details/icon2.png";
import eventDetailsIcon3 from "../assets/images/event-details/icon3.png";

function SectionEventDetails({ siteData }) {
  return (
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
        width={180}
        alt="Event Details Icon1"
      />
      <h1 className="event-time">
        TIỆC NHÀ GÁI ĐƯỢC TỔ CHỨC <br />
        VÀO LÚC {siteData.event.time}
      </h1>

      <h1 className="event-dining-weekday">{siteData.event.dining.weekday}</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 className="month">{siteData.event.dining.month}</h1>
        </div>
        <h1 className="day">{siteData.event.dining.day}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 className="year">{siteData.event.dining.year}</h1>
        </div>
      </div>

      <h3 className="lunar-date eb-garamond-regular" style={{ margin: "5px" }}>
        {siteData.event.lunarDate}
      </h3>

      <img
        style={{ margin: "20px" }}
        src={eventDetailsIcon2}
        width={70}
        alt="Event Details Icon2"
      />

      <h1 className="venue" style={{ marginTop: "10px", marginBottom: 0 }}>
        TẠI {siteData.event.venue.toUpperCase()}
      </h1>
      <h1 className="venue" style={{ marginBottom: "10px", marginTop: 0 }}>
        {siteData.event.venue_sub.toUpperCase()}
      </h1>

      <h3 className="eb-garamond-regular">Địa chỉ: {siteData.event.address}</h3>

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
