import React from 'react'
import { motion } from 'framer-motion'
import './FeaturedAlgos.css'
import TrophyIcon from '../../../assets/images/trophy.svg'
import WhiteCautionIcon from '../../../assets/images/whiteCaution.svg'
import BlueBg from '../../../assets/images/bluebg.png'
import PurpleBg from '../../../assets/images/purplebg.png'
import GreenBg from '../../../assets/images/greenbg.png'
import TrophyBadgeIcon from '../../../assets/images/trophy.svg'
import ManyPeopleIcon from '../../../assets/images/manyPeople.svg'
import WhiteZigZagIcon from '../../../assets/images/white-zigzag.svg'
import ThreeArrowsIcon from '../../../assets/images/threeArrows.svg'
import BlueTickIcon from '../../../assets/images/bluetick.png'

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
          <img src={TrophyIcon} alt="Trophy" className="featured-algos-trophy-icon" />
          <h2 className="featured-algos-title">Featured Algos🔥</h2>
          <img src={WhiteCautionIcon} alt="Info" className="featured-algos-info-icon" />
        </div>
      </div>

      <div className="featured-algos-cards">
        {featuredCards.map((card, index) => {
          const backgroundImage = 
            card.type === 'highest-win-rate' ? BlueBg :
            card.type === 'most-deployed' ? PurpleBg :
            GreenBg
          
          const badgeIcon = 
            card.type === 'highest-win-rate' ? TrophyBadgeIcon :
            card.type === 'most-deployed' ? ManyPeopleIcon :
            WhiteZigZagIcon
          
          return (
          <motion.div 
            key={index} 
            className={`featured-algos-card featured-algos-card-${card.type}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className={`featured-algos-card-badge featured-algos-card-badge-${card.type}`}>
              <img src={badgeIcon} alt={card.label} className="featured-algos-badge-icon" />
              <span className="featured-algos-badge-text">{card.label}</span>
            </div>
            <div className="featured-algos-card-header">
              <div className="featured-algos-card-icon">
                <img src={ThreeArrowsIcon} alt="Three Arrows" className="featured-algos-three-arrows-icon" />
              </div>
            </div>
            <div className="featured-algos-card-content">
              <div className="featured-algos-card-title-wrapper">
                <h3 className={`featured-algos-card-title ${card.type === 'highest-win-rate' ? 'underlined' : ''}`}>
                  Midcap Nifty Option Scalper CE
                </h3>
                <div className="featured-algos-card-provider">
                  <span className="featured-algos-card-provider-text">By Stockwiz Tech. LLP</span>
                  <img src={BlueTickIcon} alt="Verified" className="featured-algos-verified-icon" />
                </div>
              </div>
              {card.type === 'highest-win-rate' ? (
                <div className="featured-algos-card-metric-section win-rate">
                  <span className="featured-algos-metric-label">Win Rate:</span>
                  <span className="featured-algos-metric-value">+80.89%</span>
                </div>
              ) : card.type === 'most-deployed' ? (
                <div className="featured-algos-card-metric-section most-deployed">
                  <span className="featured-algos-metric-label">Most Deployed:</span>
                  <span className="featured-algos-metric-value deployed">2,480 Users</span>
                </div>
              ) : (
                <div className="featured-algos-card-metric-section most-profitable">
                  <span className="featured-algos-metric-label">Most Profitable:</span>
                  <span className="featured-algos-metric-value profitable">+₹2,480</span>
                </div>
              )}
            </div>
            <button className={`featured-algos-card-button featured-algos-card-button-${card.buttonType} featured-algos-card-button-${card.type}`}>
              {card.buttonText}
            </button>
          </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedAlgos

