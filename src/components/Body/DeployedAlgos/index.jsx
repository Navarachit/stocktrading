import React, { useState } from 'react'
import './DeployedAlgos.css'
import ThunderIcon from '../../../assets/images/thunder.svg'
import WhiteCautionIcon from '../../../assets/images/whiteCaution.svg'
import BriefcaseCountIcon from '../../../assets/images/briefcase-count.png'
import AlgoNameCountIcon from '../../../assets/images/algoname-count.png'
import WhiteZigZagIcon from '../../../assets/images/white-zigzag.svg'
import TvIcon from '../../../assets/images/tv.svg'

function DeployedAlgos() {
  const [activeTab, setActiveTab] = useState('All')
  const [selectedRowIndex, setSelectedRowIndex] = useState(null)

  const algos = [
    {
      name: 'Momentum AlgoFolio',
      status: 'Live',
      statusColor: 'red',
      deployedOn: '20th Nov 25 | 12:00 PM',
      deploymentType: 'Live',
      totalPL: '+₹11,50,000',
      iconType: 'briefcase' // AlgoFolio uses briefcase
    },
    {
      name: 'Bank Nifty Month',
      status: 'Waiting for next Signal',
      statusColor: 'yellow',
      deployedOn: '20th Nov 25 | 12:00 PM',
      deploymentType: 'Virtual',
      totalPL: '+₹1,50,000',
      iconType: 'algoname' // Individual uses algoname
    },
    {
      name: 'Trend Individual Algo',
      status: 'Live',
      statusColor: 'red',
      deployedOn: '20th Nov 25 | 12:00 PM',
      deploymentType: 'Live',
      totalPL: '+₹1,50,000',
      iconType: 'algoname'
    },
    {
      name: 'SMC AlgoFolio',
      status: 'Waiting for next Signal',
      statusColor: 'yellow',
      deployedOn: '20th Nov 25 | 12:00 PM',
      deploymentType: 'Virtual',
      totalPL: '+₹1,50,000',
      iconType: 'briefcase'
    },
    {
      name: 'Trend Individual Algo',
      status: 'Live',
      statusColor: 'red',
      deployedOn: '20th Nov 25 | 12:00 PM',
      deploymentType: 'Live',
      totalPL: '+₹1,50,000',
      iconType: 'algoname'
    },
    {
      name: 'Trend Individual Algo',
      status: 'Live',
      statusColor: 'red',
      deployedOn: '20th Nov 25 | 12:00 PM',
      deploymentType: 'Live',
      totalPL: '+₹1,50,000',
      iconType: 'algoname'
    },
    {
      name: 'Trend Individual Algo',
      status: 'Stopped',
      statusColor: 'red',
      deployedOn: '20th Nov 25 | 12:00 PM',
      deploymentType: 'Live',
      totalPL: '+₹1,50,000',
      iconType: 'algoname'
    }
  ]

  return (
    <div className="deployed-algos-card">
      <div className="deployed-algos-header">
        <div className="deployed-algos-header-left">
          <div className="deployed-algos-thunder-icon-container">
            <img src={ThunderIcon} alt="Thunder" className="deployed-algos-thunder-icon" />
          </div>
          <h2 className="deployed-algos-title">Deployed Algos</h2>
          <div className="deployed-algos-info-icon-container">
            <img src={WhiteCautionIcon} alt="Info" className="deployed-algos-info-icon" />
          </div>
          <a href="#" className="deployed-algos-view-more">View More</a>
        </div>
        <div className="deployed-algos-tabs">
          {['All', 'Active', 'Paused', 'Stopped'].map((tab) => (
            <button
              key={tab}
              className={`deployed-algos-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="deployed-algos-list">
        {algos.map((algo, index) => (
          <div 
            key={index} 
            className={`deployed-algos-item ${selectedRowIndex === index ? 'active' : ''}`}
            onClick={() => setSelectedRowIndex(index)}
          >
            <div className="deployed-algos-item-left">
              <div className="deployed-algos-item-icon">
                <img 
                  src={algo.iconType === 'briefcase' ? BriefcaseCountIcon : AlgoNameCountIcon} 
                  alt={algo.name}
                  className="deployed-algos-item-icon-img"
                />
              </div>
              <div className="deployed-algos-item-content">
                <div className="deployed-algos-item-header">
                  <span className="deployed-algos-item-name">{algo.name}</span>
                  <div className={`deployed-algos-status-pill ${algo.statusColor}`}>
                    <span className="deployed-algos-status-dot"></span>
                    <span className="deployed-algos-status-text">{algo.status}</span>
                  </div>
                </div>
                <div className="deployed-algos-item-deployed-on">
                  <img src={ThunderIcon} alt="Thunder" className="deployed-algos-thunder-small-icon" />
                  <span className="deployed-algos-item-detail">Deployed on: {algo.deployedOn}</span>
                </div>
              </div>
            </div>
            <div className="deployed-algos-item-right">
              <div className="deployed-algos-deployment-type-section">
                <span className="deployed-algos-section-label">Deployment Type</span>
                <div className={`deployed-algos-deployment-type-badge ${algo.deploymentType.toLowerCase()}`}>
                  {algo.deploymentType === 'Live' ? (
                    <img src={WhiteZigZagIcon} alt="ZigZag" className="deployed-algos-deployment-icon" />
                  ) : (
                    <img src={TvIcon} alt="TV" className="deployed-algos-deployment-icon" />
                  )}
                  <span>{algo.deploymentType}</span>
                </div>
              </div>
              <div className="deployed-algos-pl-section">
                <span className="deployed-algos-section-label">Total P&L</span>
                <span className="deployed-algos-pl-value">{algo.totalPL}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeployedAlgos

