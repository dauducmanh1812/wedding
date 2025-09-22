import "../assets/styles/04-invitation.scss";

function SectionInvitation({ siteData }) {
  return (
    <div
      className="section section-invitation"
      style={{
        backgroundImage: `url("/images/background2.jpg")`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h1 className="heading">
          THÂN MỜI TỚI DỰ LỄ CƯỚI THÂN MẬT <br />
          CỦA CHÚNG TÔI
        </h1>
      </div>
      {/* Bride and Groom Info */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 className="text-and">{"&".toUpperCase()}</h1>
        <h1 style={{ margin: 15 }}>{siteData.couple.bride.toUpperCase()}</h1>
        <h1 style={{ margin: 15 }}>{siteData.couple.groom.toUpperCase()}</h1>
      </div>

      {/* Bride and Groom Image */}
      <div className="photo-gallery-container">
        {/* Groom's Photo */}
        <div className="polaroid photo-one">
          <img src="/images/invitation/qr-1.png" alt="Groom in a grey suit" />
        </div>

        {/* Bride's Photo */}
        <div className="polaroid photo-two">
          <img src="/images/invitation/qr-1.png" alt="Bride with a veil" />
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
