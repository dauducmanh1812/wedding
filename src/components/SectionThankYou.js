import "../assets/styles/08-thank-you.scss";

function SectionThankYou({ siteData }) {
  return (
    <section className="section section-thank-you">
      <div className="thank-you-content">
        <p>{siteData.thankYou.message}</p>
        <p>{siteData.thankYou.signature}</p>
      </div>
    </section>
  );
}

export default SectionThankYou;
