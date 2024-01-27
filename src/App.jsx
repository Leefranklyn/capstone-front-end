import { useState } from 'react'
import { NavComponent } from './components/NavComponent'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard';
import { LoginNavComponent } from './components/LoginNavComponent';
import LoginContext from './context/LoginContext';
import { PropsqrProvider } from './context/PropsqrContext';
import 'typeface-roboto'

function App() {
  const [token, setToken] = useState();
  return (
    <div>
      <PropsqrProvider>
      <LoginContext.Provider value={{token, setToken}}>
        <Router>
          <RenderedComponent />
          <AnimatePresence mode='wait'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </AnimatePresence>
        </Router>
        </LoginContext.Provider>
      </PropsqrProvider>
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
