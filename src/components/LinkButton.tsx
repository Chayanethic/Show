import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface LinkButtonProps {
  href: string;
  isVisible: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm md:text-base"
      >
        <span>Continue to Surprise</span>
        <ExternalLink size={16} className="md:w-5 md:h-5" />
      </a>
    </motion.div>
  );
};