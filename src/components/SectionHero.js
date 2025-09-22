import "../assets/styles/01-hero.scss";

function SectionHero({ siteData }) {
  return (
    <div className="section section-hero">
      <div className="arcittya-begatri">
        <h1 className="fist-name">
          {siteData.couple.shortName_bride.toUpperCase()}
        </h1>
        <div className="second">
          <span>&</span>{" "}
          <h1 className="second-name">
            {siteData.couple.shortName_groom.toUpperCase()}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionHero;
