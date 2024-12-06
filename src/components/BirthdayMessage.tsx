import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface BirthdayMessageProps {
  name: string;
  isVisible: boolean;
}

export const BirthdayMessage: React.FC<BirthdayMessageProps> = ({ name, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center px-4"
    >
      <motion.div
        className="text-3xl md:text-5xl font-bold text-pink-600 mb-6"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <TypeAnimation
          sequence={[
            'Happy Birthday,',
            1000,
            `Happy Birthday, ${name}!`,
          ]}
          wrapper="h1"
          speed={50}
          className="inline-block"
        />
        <Sparkles className="inline-block text-yellow-400 ml-2" />
      </motion.div>
      
      <motion.div
        className="flex items-center justify-center gap-2 md:gap-4 mb-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Stars className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
        <Heart className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
        <Stars className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
      </motion.div>
      
      <TypeAnimation
        sequence={[
          'Wishing you a day filled with...',
          1000,
          'Wishing you a day filled with joy...',
          1000,
          'Wishing you a day filled with joy, love...',
          1000,
          'Wishing you a day filled with joy, love, and beautiful moments!',
        ]}
        wrapper="p"
        speed={50}
        className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
      />
    </motion.div>
  );
};