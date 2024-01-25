import { useState } from 'react'
import { NavComponent } from './components/NavComponent'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import 'typeface-roboto'

// import './App.css'

function App() {
  return (
    <div>
      <Router>
        <NavComponent />
        <AnimatePresence mode='wait'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </AnimatePresence>
      </Router>
    </div>
  )
}

export default App
