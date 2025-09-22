import "../assets/styles/02-save-the-date.scss";

function SectionSaveTheDate({ siteData }) {
  return (
    <div className="section section-save-the-date">
      <h2>
        QUYẾT ĐỊNH BÊN NHAU <br />
        TRỌN ĐỜI
      </h2>
      <p className="monsieur-la-doulaise-regular">Save the date</p>
      <p className="date">{siteData.event.date}</p>
      <img src="/images/save-the-date/couple-1.jpg" alt="Couple" />
    </div>
  );
}

export default SectionSaveTheDate;
