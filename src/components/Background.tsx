import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundProps {
  isOpen: boolean;
}

export const Background: React.FC<BackgroundProps> = ({ isOpen }) => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        background: isOpen
          ? 'linear-gradient(45deg, #FF69B4, #FFB6C1, #FFC0CB, #FF69B4)'
        : 'linear-gradient(45deg, #F3F4F6, #E5E7EB)',
      }}
      transition={{ duration: 1 }}
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.2) 100%)',
          }}
        />
      )}
    </motion.div>
  );
};