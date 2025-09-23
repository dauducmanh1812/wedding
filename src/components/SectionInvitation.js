import "../assets/styles/04-invitation.scss";

import photo1 from "../assets/images/04-invitation/photo1.png";
import photo2 from "../assets/images/04-invitation/photo2.png";

function SectionInvitation({ siteData }) {
  return (
    <div className="section section-invitation">
      {/* Heading */}
      <h3 className="heading">
        THÂN MỜI TỚI DỰ LỄ CƯỚI THÂN MẬT <br />
        CỦA CHÚNG TÔI
      </h3>

      {/* Bride and Groom Info */}
      <div className="information-container">
        <h2 className="information-name">
          {siteData.couple.bride.toUpperCase()}
        </h2>
        <h1 className="text-and">&</h1>
        <h2 className="information-name">
          {siteData.couple.groom.toUpperCase()}
        </h2>
      </div>

      {/* Bride and Groom Image */}
      <div className="photo-gallery-container">
        
        {/* Groom's Photo */}
        <div className="polaroid photo-one">
          <img src={photo1} alt="Groom in a grey suit" />
        </div>

        {/* Bride's Photo */}
        <div className="polaroid photo-two">
          <img src={photo2} alt="Bride with a veil" />
        </div>
      </div>

      {/* Family Info */}
      <div className="family-container">
        <div className="family-side">
          <h1 className="family-title">{siteData.family.brideSide.title}</h1>
          <h2>
            {siteData.family.brideSide.father} <br />
            {siteData.family.brideSide.mother} <br />
            {siteData.family.brideSide.city}
          </h2>
        </div>
        <div className="family-side">
          <h1 className="family-title">{siteData.family.groomSide.title}</h1>
          <h2>
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
