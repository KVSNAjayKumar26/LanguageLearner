import React from 'react';
import { motion } from 'framer-motion';

const LessonCard = ({ lesson }) => {
  return (
    <motion.div
    className='lesson-card'
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    >
        <h3>{lesson.title}</h3>
        <h3>{lesson.description}</h3>
    </motion.div>
  );
};

export default LessonCard;