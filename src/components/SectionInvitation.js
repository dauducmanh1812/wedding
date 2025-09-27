import "../assets/styles/04-invitation.scss";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import photo1 from "../assets/images/04-invitation/photo1-optimized.webp";
import photo2 from "../assets/images/04-invitation/photo2-optimized.webp";

function SectionInvitation({ siteData }) {
  const headingRef = useScrollAnimation();
  const brideNameRef = useScrollAnimation();
  const textAndRef = useScrollAnimation();
  const groomNameRef = useScrollAnimation();
  const photoOneRef = useScrollAnimation();
  const photoTwoRef = useScrollAnimation();

  return (
    <div className="section section-invitation">
      {/* Heading */}
      <h3 ref={headingRef} className="heading fade-in-up">
        THÂN MỜI TỚI DỰ LỄ CƯỚI THÂN MẬT <br />
        CỦA CHÚNG TÔI
      </h3>

      {/* Bride and Groom Info */}
      <div className="information-container">
        <h2 ref={brideNameRef} className="information-name fade-in-left">
          {siteData.couple.bride.toUpperCase()}
        </h2>
        <h1 ref={textAndRef} className="text-and fade-in-center">&</h1>
        <h2 ref={groomNameRef} className="information-name fade-in-right">
          {siteData.couple.groom.toUpperCase()}
        </h2>
      </div>

      {/* Bride and Groom Image */}
      <div className="photo-gallery-container">
        {/* Groom's Photo */}
        <div ref={photoOneRef} className="polaroid photo-one flip-in-y-left">
          <img src={photo1} alt="Groom in a grey suit" />
        </div>

        {/* Bride's Photo */}
        <div ref={photoTwoRef} className="polaroid photo-two flip-in-y-right">
          <img src={photo2} alt="Bride with a veil" />
        </div>
      </div>

      {/* Family Info */}
      <div className="family-container">
        <div className="family-side">
          <h1 className="family-title">
            {siteData.family.brideSide.title.toUpperCase()}
          </h1>
          <h2 className="family-info">
            {siteData.family.brideSide.father} <br />
            {siteData.family.brideSide.mother} <br />
            {siteData.family.brideSide.city}
          </h2>
        </div>
        <div className="family-side">
          <h1 className="family-title">
            {siteData.family.groomSide.title.toUpperCase()}
          </h1>
          <h2 className="family-info">
            {siteData.family.groomSide.father}
            <br />
            {siteData.family.groomSide.mother}
            <br />
            {siteData.family.groomSide.city}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SectionInvitation;
