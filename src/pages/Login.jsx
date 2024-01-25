import React from 'react'
import { motion } from 'framer-motion';


export const Login = () => {
  return (
    <>
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} style={{ padding: "40px"}}>Login</motion.div>
    </>
  )
}
