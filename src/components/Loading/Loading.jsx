import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.img
        src="https://res.cloudinary.com/duh7c5x99/image/upload/v1756100744/logonoor_pcbxxf.png"
        alt="NoorVia BD Logo"
        className="w-64 h-64 object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          rotate: {
            repeat: Infinity,
            duration: 0.8
          }
        }}
      />
    </div>
  );
};

export default Loading; 