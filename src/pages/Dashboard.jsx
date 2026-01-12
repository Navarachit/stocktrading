import React from 'react'
import { motion } from 'framer-motion'
import OrderFailed from '../components/Body/OrderFailed'
import Greeting from '../components/Body/Greeting'
import NiftyColumns from '../components/Body/NiftyColumns'
import MarketSentiment from '../components/Body/MarketSentiment'
import OverallProfitLoss from '../components/Body/OverallProfitLoss'
import DeployedAlgos from '../components/Body/DeployedAlgos'
import FeaturedAlgos from '../components/Body/FeaturedAlgos'
import '../components/Body/Body.css'

/**
 * Dashboard page component
 * For now, all routes will render this same dashboard
 * This can be expanded later to have different content per route
 */
const Dashboard = () => {
  return (
    <motion.div 
      className="body-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <OrderFailed />
      <Greeting />
      <div className="body-indices-section">
        <NiftyColumns />
        <MarketSentiment />
      </div>
      <div className="body-top-section-wrapper">
        <OverallProfitLoss />
        <DeployedAlgos />
      </div>
      <div className="body-bottom-section">
        <FeaturedAlgos />
      </div>
    </motion.div>
  )
}

export default Dashboard
