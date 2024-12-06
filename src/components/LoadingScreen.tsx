import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-pink-500"
      >
        <Gift size={48} />
      </motion.div>
      <motion.p
        className="absolute mt-24 text-lg text-pink-600 font-medium"
        animate={{
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Preparing your surprise...
      </motion.p>
    </motion.div>
  );
};