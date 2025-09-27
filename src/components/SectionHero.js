import "../assets/styles/01-hero.scss";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function SectionHero({ siteData }) {
  const brideRef = useScrollAnimation();
  const ampersandRef = useScrollAnimation();
  const groomRef = useScrollAnimation();

  return (
    <div className="section section-hero">
      <div className="arcittya-begatri">
        <h1 ref={brideRef} className="fade-in-up fist-name">
          {siteData.couple.shortName_bride.toUpperCase()}
        </h1>
        <div className="second">
          <span ref={ampersandRef} className="fade-in-up">&</span>{" "}
          <h1 ref={groomRef} className="fade-in-up second-name">
            {siteData.couple.shortName_groom.toUpperCase()}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionHero;
