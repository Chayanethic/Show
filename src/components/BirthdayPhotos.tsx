import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

interface BirthdayPhotosProps {
  photos?: string[];
  isVisible: boolean;
}

export const BirthdayPhotos: React.FC<BirthdayPhotosProps> = ({ photos, isVisible }) => {
  if (!photos?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="mt-8 px-4"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg aspect-square"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={photo}
              alt={`Birthday memory ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Failed+to+load+image';
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2">
                  <ImageIcon size={16} />
                  <span className="text-sm">Memory {index + 1}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};