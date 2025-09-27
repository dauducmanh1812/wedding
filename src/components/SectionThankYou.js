import "../assets/styles/08-thank-you.scss";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function SectionThankYou({ siteData }) {
  const thankYouRef = useScrollAnimation();

  return (
    <div className="section section-thank-you">
      <div ref={thankYouRef} className="thank-you-content fade-in-up">{siteData.thankYou.message}</div>
      <div className="thank-you-content monsieur-la-doulaise-regular signature">
        {siteData.thankYou.signature}
      </div>
    </div>
  );
}

export default SectionThankYou;
