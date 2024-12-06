import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';

interface GiftBoxProps {
  isOpen: boolean;
  onClick: () => void;
}

export const GiftBox: React.FC<GiftBoxProps> = ({ isOpen, onClick }) => {
  return (
    <motion.div
      className="cursor-pointer relative mx-auto"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <motion.div
        animate={isOpen ? { scale: [1, 1.2, 0] } : { scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-2xl"
      >
        {!isOpen && (
          <motion.div
            className="absolute -top-4 -right-4 text-yellow-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={24} className="md:hidden" />
            <Sparkles size={32} className="hidden md:block" />
          </motion.div>
        )}
        
        <Gift
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
          size={48}
        />
        
        <motion.div
          className="absolute inset-0 border-4 border-pink-300 rounded-2xl"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        
        {!isOpen && (
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs md:text-sm text-pink-300"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Click to open!
          </motion.div>
        )}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl -z-10 blur-xl"
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};