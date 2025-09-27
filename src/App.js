import { useRef } from "react";

import "./App.scss";
import siteData from "./data.json";

import SectionHero from "./components/SectionHero";
import SectionSaveTheDate from "./components/SectionSaveTheDate";
import SectionCalendar from "./components/SectionCalendar";
import SectionInvitation from "./components/SectionInvitation";
import SectionEventDetails from "./components/SectionEventDetails";
import SectionGallery from "./components/SectionGallery";
import SectionRSVPForm from "./components/SectionRSVPForm";
import SectionThankYou from "./components/SectionThankYou";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const audioPlayerRef = useRef(null);

  const toggleAudio = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.toggleAudio();
    }
  };

  return (
    <div className="wedding-invitation" onClick={toggleAudio}>
      <AudioPlayer ref={audioPlayerRef} />

      <div className="wedding-invitation-container">
        <SectionHero siteData={siteData} />
        <SectionSaveTheDate siteData={siteData} />
        <SectionCalendar />
        <SectionInvitation siteData={siteData} />
        <SectionEventDetails siteData={siteData} />
        <SectionGallery />
        <SectionRSVPForm siteData={siteData} />
        <SectionThankYou siteData={siteData} />
      </div>
    </div>
  );
}

export default App;
