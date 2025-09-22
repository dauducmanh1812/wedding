import { useState, useRef } from "react";

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

function App() {
  // Ref for Audio
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Audio toggle handler
  const toggleAudio = () => {
    if (isPlaying === false) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="wedding-invitation" onClick={toggleAudio}>
      {/* --- AUDIO --- */}
      <audio ref={audioRef} src="/audio/background-music.mp3" loop />

      <div className="wedding-invitation-section">
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
