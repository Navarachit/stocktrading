import React, { useState } from 'react'
import WhiteCautionIcon from '../../../assets/images/whiteCaution.svg'
import BlackZigZagIcon from '../../../assets/images/blackzigzag.svg'
import TvIcon from '../../../assets/images/tv.svg'
import ThunderIcon from '../../../assets/images/thunder.svg'
import AlgorithmList from './AlgorithmList'
import './OverallProfitLoss.css'

function OverallProfitLoss() {
  const [activeToggle, setActiveToggle] = useState('Live')

  return (
    <div className="overall-profit-loss-card">
      <div className="overall-profit-loss-container-1">
        <div className="overall-profit-loss-header-row">
          <div className="overall-profit-loss-header-left">
            <h2 className="overall-profit-loss-title">Overall Profit/Loss</h2>
            <img src={WhiteCautionIcon} alt="Caution" className="overall-profit-loss-caution-icon" />
            <a href="#" className="overall-profit-loss-view-more">View More</a>
          </div>
          <div className="overall-profit-loss-toggle-section">
            <div className="overall-profit-loss-toggles">
              <button
                className={`overall-profit-loss-toggle ${activeToggle === 'Live' ? 'active' : ''}`}
                onClick={() => setActiveToggle('Live')}
              >
                Live
                <img src={BlackZigZagIcon} alt="ZigZag" className="overall-profit-loss-zigzag-icon" />
              </button>
              <button
                className={`overall-profit-loss-toggle ${activeToggle === 'Virtual' ? 'active' : ''}`}
                onClick={() => setActiveToggle('Virtual')}
              >
                Virtual
                <img src={TvIcon} alt="TV" className="overall-profit-loss-tv-icon" />
              </button>
            </div>
            <button className="overall-profit-loss-lightning-btn">
              <img src={ThunderIcon} alt="Thunder" className="overall-profit-loss-thunder-icon" />
            </button>
          </div>
        </div>

        <div className="overall-profit-loss-main">
          <div className="overall-profit-loss-amount">
            <span className="overall-profit-loss-amount-value">+₹1,50,000.84</span>
            <span className="overall-profit-loss-amount-transactions"> in 5 transactions</span>
          </div>
          <div className="overall-profit-loss-updated">
            <span className="overall-profit-loss-updated-label">Last Updated: </span>
            <span className="overall-profit-loss-updated-value">25th Oct 2025 | 11:53 PM</span>
          </div>
        </div>

        <div className="overall-profit-loss-metrics">
          <button className="overall-profit-loss-metric">
            <span className="overall-profit-loss-metric-label">Booked P&L</span>
            <span className="overall-profit-loss-metric-value positive">+₹1,50,000.84</span>
          </button>
          <button className="overall-profit-loss-metric">
            <span className="overall-profit-loss-metric-label">Cap Deployed</span>
            <span className="overall-profit-loss-metric-value">₹1,50,000.84</span>
          </button>
          <button className="overall-profit-loss-metric">
            <span className="overall-profit-loss-metric-label">Active Algos</span>
            <span className="overall-profit-loss-metric-value">4</span>
          </button>
        </div>
      </div>

      <div className="overall-profit-loss-container-2">
        <AlgorithmList />
      </div>
    </div>
  )
}

export default OverallProfitLoss

