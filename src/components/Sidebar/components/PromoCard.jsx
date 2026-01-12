import React from 'react'
import WhiteXIcon from '../../../assets/images/white-X.svg'
import BlueSidebarBg from '../../../assets/images/bluesidebarbg.png'
import './PromoCard.css'

/**
 * PromoCard component displaying contact information
 * @param {Object} data - Promo card data (title, description, buttonText)
 */
const PromoCard = ({ data }) => {
  const handleSupportClick = () => {
    // TODO: Implement support action
    console.log('Support button clicked')
  }

  return (
    <div 
      className="promo-card" 
      style={{ backgroundImage: `url(${BlueSidebarBg})` }}
      role="region"
      aria-label="Contact Us"
    >
      <img 
        src={WhiteXIcon} 
        alt="X Logo" 
        className="promo-logo" 
        loading="lazy"
        aria-hidden="true"
      />
      <h3 className="promo-title">{data.title}</h3>
      <p className="promo-description">{data.description}</p>
      <button 
        className="promo-button"
        onClick={handleSupportClick}
        aria-label={`${data.buttonText} - ${data.title}`}
      >
        {data.buttonText}
      </button>
    </div>
  )
}

export default PromoCard
