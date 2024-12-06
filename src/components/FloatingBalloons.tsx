import React from 'react';
import { motion } from 'framer-motion';

export const FloatingBalloons: React.FC = () => {
  const balloons = Array.from({ length: 10 }, (_, i) => i);
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500'];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon}
          className={`absolute w-12 h-16 ${colors[balloon % colors.length]} rounded-full`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 3,
          }}
        >
          <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-gray-300 -translate-x-1/2" />
        </motion.div>
      ))}
    </div>
  );
};