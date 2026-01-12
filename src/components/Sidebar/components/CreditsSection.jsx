import React from 'react'
import StarIcon from '../../../assets/images/star.svg'
import './CreditsSection.css'

/**
 * CreditsSection component displaying live credits information
 * @param {Object} credits - Credits data (current, total)
 */
const CreditsSection = ({ credits }) => {
  return (
    <div 
      className="credits-section"
      role="region"
      aria-label={`Live Credits: ${credits.current} out of ${credits.total}`}
    >
      <div className="credits-icon-container" aria-hidden="true">
        <img 
          src={StarIcon} 
          alt="" 
          className="credits-icon" 
          loading="lazy"
        />
      </div>
      <span className="credits-label">Live Credits</span>
      <div className="credits-count-badge" aria-label={`${credits.current} of ${credits.total} credits`}>
        <span className="credits-count-current">{credits.current}</span>
        <span className="credits-count-total">/{credits.total}</span>
      </div>
    </div>
  )
}

export default CreditsSection
