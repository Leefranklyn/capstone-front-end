import { useState } from 'react'
import { NavComponent } from './components/NavComponent'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { LoginNavComponent } from './components/LoginNavComponent';
import 'typeface-roboto'

function App() {
  return (
    <div>
      <Router>
        <RenderedComponent />
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

function RenderedComponent() {
  const location = useLocation();
  return (
    <>
    {location.pathname === '/login' || location.pathname === "/signup" ? <LoginNavComponent /> : <NavComponent />}
    </>
  )
}

export default App
