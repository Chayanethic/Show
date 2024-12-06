import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { GiftBox } from './components/GiftBox';
import { BirthdayMessage } from './components/BirthdayMessage';
import { Background } from './components/Background';
import { FloatingBalloons } from './components/FloatingBalloons';
import { BackgroundMusic } from './components/BackgroundMusic';
import { LinkButton } from './components/LinkButton';
import { LoadingScreen } from './components/LoadingScreen';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BirthdayPhotos } from './components/BirthdayPhotos';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [play] = useSound('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
  const [showLink, setShowLink] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Add your photos here
  const photos = [
    //  ""
    // Add photo URLs here
    // Example:
    // "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowLink(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    play();
  };

  const [retrievedName, setRetrievedName] = useState("");
  const { id } = useParams();
  const backendUrl = "https://wishbirthday.vercel.app";

  // Fetch data when the component mounts
  useEffect(() => {
    // Call the fetchWish function when the component mounts
    fetchWish();
  }, [id]); // The empty array means the effect runs only when the component mounts

  const fetchWish = async () => {
    try {
      const response = await axios.get(`${backendUrl}/wish/${id}`);
      console.log(response.data);
      setRetrievedName(response.data); // Assuming the response is the name
    } catch (error) {
      console.error("Error fetching wish:",);
      setRetrievedName("Wish not found");
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Background isOpen={isOpen} />
      <BackgroundMusic isPlaying={isOpen} />
      
      <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
        {isOpen && (
          <>
            <Confetti
              numberOfPieces={200}
              recycle={false}
              colors={['#EC4899', '#8B5CF6', '#F59E0B', '#10B981']}
            />
            <FloatingBalloons />
          </>
        )}
        
        <div className="relative z-10 w-full max-w-md mx-auto">
          {!isOpen && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8 text-center font-bold px-4"
            >
              A Special Surprise Awaits You! 🎁
            </motion.p>
          )}
          
          <GiftBox isOpen={isOpen} onClick={handleOpen} />
          
          {isOpen && (
            <>
              <BirthdayMessage name={retrievedName} isVisible={isOpen} />
              <BirthdayPhotos photos={photos} isVisible={isOpen} />
            </>
          )}
        </div>
      </div>
      
      <LinkButton
        href="https://your-next-surprise-page.com"
        isVisible={showLink}
      />
    </>
  );
}