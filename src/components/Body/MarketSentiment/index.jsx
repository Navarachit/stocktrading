import React from 'react'
import BullIcon from '../../../assets/images/bull.svg'
import PatternIcon from '../../../assets/images/Pattern.svg'
import './MarketSentiment.css'

function MarketSentiment() {
  return (
    <div className="market-sentiment-container">
      <div className="market-sentiment-background">
        <img src={PatternIcon} alt="Pattern" className="market-sentiment-pattern" />
      </div>
      <div className="market-sentiment-content">
        <div className="market-sentiment-text">
          <div className="market-sentiment-label">Market Sentiment</div>
          <div className="market-sentiment-value">Bullish</div>
        </div>
        <img src={BullIcon} alt="Bull" className="market-sentiment-bull" />
      </div>
    </div>
  )
}

export default MarketSentiment

