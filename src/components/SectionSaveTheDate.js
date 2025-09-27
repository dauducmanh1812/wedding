import "../assets/styles/02-save-the-date.scss";

import couple1 from "../assets/images/02-save-the-date/couple-1-optimized.webp";

function SectionSaveTheDate({ siteData }) {
  return (
    <div className="section section-save-the-date">
      <h1 className="heading">
        QUYẾT ĐỊNH BÊN NHAU <br />
        TRỌN ĐỜI
      </h1>
      <h1 className="save-the-date monsieur-la-doulaise-regular">Save the date</h1>
      <h1 className="date">{siteData.event.date}</h1>
      <img src={couple1} alt="Couple" />
    </div>
  );
}

export default SectionSaveTheDate;
