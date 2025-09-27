import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import audioFile from "../assets/audio/1.mp3";

const AudioPlayer = forwardRef((_, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useImperativeHandle(ref, () => ({
    toggleAudio,
  }));

  return <audio ref={audioRef} src={audioFile} loop />;
});

export default AudioPlayer;
