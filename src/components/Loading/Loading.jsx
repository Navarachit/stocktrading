import React from 'react'
import { motion } from 'framer-motion'
import './Loading.css'

/**
 * Loading component for route lazy loading
 * Provides a smooth loading state while components are being loaded
 */
const Loading = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="#407AFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="56.55"
            strokeDashoffset="14.14"
          />
        </svg>
      </motion.div>
      <motion.p
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Loading...
      </motion.p>
    </div>
  )
}

export default Loading
