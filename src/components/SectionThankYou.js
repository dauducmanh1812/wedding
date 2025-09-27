import "../assets/styles/08-thank-you.scss";

function SectionThankYou({ siteData }) {
  return (
    <div className="section section-thank-you">
      <div className="thank-you-content">{siteData.thankYou.message}</div>
      <div className="thank-you-content monsieur-la-doulaise-regular signature">
        {siteData.thankYou.signature}
      </div>
    </div>
  );
}

export default SectionThankYou;
