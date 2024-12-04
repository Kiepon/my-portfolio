import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const AnimatedWords = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const words = ['Python', 'Backend', 'Django'];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 3000);
      return () => clearInterval(interval);
    });
  
    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" }, color: 'grey' },
    };
  
    return (
      <motion.span
        key={wordIndex}
        variants={variants}
        animate="visible"
        initial="hidden"
      >
        {words[wordIndex]}
      </motion.span>
    );
};

export default AnimatedWords;