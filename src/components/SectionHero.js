import "../assets/styles/01-hero.scss";

function SectionHero({ siteData }) {
  return (
    <div className="section section-hero">
      <div className="element-transtion arcittya-begatri">
        <h1>{siteData.couple.shortName_bride.toUpperCase()}</h1>
        <div className="section-hero_groom">
          <span>&</span>{" "}
          <h1>{siteData.couple.shortName_groom.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  );
}

export default SectionHero;
