import React from 'react'
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
    <div className="body-container">
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
    </div>
  )
}

export default Body

