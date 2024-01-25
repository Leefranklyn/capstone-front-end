import React from 'react'
import { motion } from 'framer-motion'

export const SignUp = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} style={{ padding: "40px"}}>Sign Up</motion.div>
  )
}
