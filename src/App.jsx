import { useState } from 'react'
import { NavComponent } from './components/NavComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
