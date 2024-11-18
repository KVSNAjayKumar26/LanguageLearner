import React from 'react';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className='home-page'
    >
        <h2>Welcome to Language Learner</h2>
        <p>Start learning new languages with interactive lessons and quizzes.</p>
    </motion.div>
  );
};

export default Home;