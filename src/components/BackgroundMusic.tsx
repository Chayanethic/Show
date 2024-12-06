import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import happy from '../happy.mp3';
interface BackgroundMusicProps {
  isPlaying: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
      
      // Stop music after 30 seconds
      const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 30000);
      
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={happy}
        preload="auto"
      />
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="fixed bottom-4 left-4 z-50 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}
    </>
  );
};