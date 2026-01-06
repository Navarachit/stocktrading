import React from 'react'
import { motion } from 'framer-motion'
import OrderFailed from './OrderFailed'
import Greeting from './Greeting'
import NiftyColumns from './NiftyColumns'
import MarketSentiment from './MarketSentiment'
import OverallProfitLoss from './OverallProfitLoss'
import DeployedAlgos from './DeployedAlgos'
import FeaturedAlgos from './FeaturedAlgos'
import './Body.css'

function Body() {
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

export default Body

