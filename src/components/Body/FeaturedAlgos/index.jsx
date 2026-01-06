import React from 'react'
import './FeaturedAlgos.css'

function FeaturedAlgos() {
  const featuredCards = [
    {
      type: 'highest-win-rate',
      label: 'Highest Win Rate',
      icon: 'trophy',
      title: 'Midcap Nifty Option Scalper CE By Stockwiz Tech. LLP',
      metric: 'Win Rate: +80.89%',
      buttonText: 'View Details',
      buttonType: 'view'
    },
    {
      type: 'most-deployed',
      label: 'Most Deployed',
      icon: 'people',
      title: 'Midcap Nifty Option Scalper CE By Stockwiz Tech. LLP',
      metric: 'Most Deployed: 2,480 Users',
      buttonText: 'Deploy Now',
      buttonType: 'deploy'
    },
    {
      type: 'most-profitable',
      label: 'Most Profitable',
      icon: 'chart',
      title: 'Midcap Nifty Option Scalper CE By Stockwiz Tech. LLP',
      metric: 'Most Profitable: +₹2,480',
      buttonText: 'Deploy Now',
      buttonType: 'deploy'
    }
  ]

  return (
    <div className="featured-algos-section">
      <div className="featured-algos-header">
        <div className="featured-algos-title-section">
          <svg className="featured-algos-flame-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C10 2 6 4 6 8C6 10 7 12 8 13C8 11 9 9 10 7C11 9 12 11 12 13C13 12 14 10 14 8C14 4 10 2 10 2Z" fill="#ff6b35"/>
          </svg>
          <h2 className="featured-algos-title">Featured Algos</h2>
        </div>
        <svg className="featured-algos-info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 6V8M8 10V10.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="featured-algos-cards">
        {featuredCards.map((card, index) => (
          <div key={index} className={`featured-algos-card featured-algos-card-${card.type}`}>
            <div className="featured-algos-card-header">
              <div className={`featured-algos-card-icon featured-algos-card-icon-${card.icon}`}>
                {card.icon === 'trophy' && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 2H15V6H5V2Z" fill="currentColor"/>
                    <path d="M7 6V10C7 12 8.5 13 10 13C11.5 13 13 12 13 10V6H7Z" fill="currentColor"/>
                    <path d="M8 13V16H12V13" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M9 16H11" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )}
                {card.icon === 'people' && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="7" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 16C2 13 4.5 11 7 11C9.5 11 12 13 12 16" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="13" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M18 16C18 13 15.5 11 13 11" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )}
                {card.icon === 'chart' && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 16L8 11L12 15L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 10V16H3V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
              </div>
              <span className="featured-algos-card-label">{card.label}</span>
            </div>
            <div className="featured-algos-card-content">
              <div className="featured-algos-card-title">
                {card.title}
                <svg className="featured-algos-verified-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#4ade80"/>
                  <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`featured-algos-card-metric ${card.type === 'most-profitable' ? 'positive' : ''}`}>
                {card.metric}
              </div>
            </div>
            <button className={`featured-algos-card-button featured-algos-card-button-${card.buttonType}`}>
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedAlgos

