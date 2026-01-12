import React from 'react'
import StrykeLogo from '../../../assets/images/Stryke.svg'
import XLogo from '../../../assets/images/X.svg'
import './Logo.css'

/**
 * Logo component displaying Stryke and X logos
 */
const Logo = () => {
  return (
    <div className="logo" aria-label="Stryke Logo">
      <img 
        src={StrykeLogo} 
        alt="Stryke" 
        className="logo-stryke-svg" 
        loading="lazy"
      />
      <img 
        src={XLogo} 
        alt="X" 
        className="logo-x-svg" 
        loading="lazy"
      />
    </div>
  )
}

export default Logo
