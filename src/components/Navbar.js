import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Language Learner</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;