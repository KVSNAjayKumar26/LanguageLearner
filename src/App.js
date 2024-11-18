import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Lessons from './pages/Lessons'
import QuizPage from './pages/QuizPage'
import Footer from './components/Footer'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lessons' element={<Lessons />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;