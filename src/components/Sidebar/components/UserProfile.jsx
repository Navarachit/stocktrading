import React from 'react'
import MaleIcon from '../../../assets/images/Male.svg'
import SettingsIcon from '../../../assets/images/settings.svg'
import './UserProfile.css'

/**
 * UserProfile component displaying user information and settings
 * @param {Object} user - User data (name, avatar)
 * @param {boolean} sidebarOpen - Whether sidebar is open
 * @param {Function} onSettingsClick - Handler for settings button click
 */
const UserProfile = ({ user, sidebarOpen, onSettingsClick }) => {
  const handleSettingsClick = () => {
    if (onSettingsClick) {
      onSettingsClick()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSettingsClick()
    }
  }

  return (
    <div className="user-profile" role="region" aria-label="User profile">
      <div className="user-avatar" aria-hidden="true">
        <img 
          src={MaleIcon} 
          alt="" 
          className="user-avatar-icon" 
          loading="lazy"
        />
      </div>
      {sidebarOpen && (
        <span className="user-name" aria-label={`User: ${user.name}`}>
          {user.name}
        </span>
      )}
      <button 
        className="settings-button"
        onClick={handleSettingsClick}
        onKeyDown={handleKeyDown}
        aria-label="Open settings"
        type="button"
      >
        <img 
          src={SettingsIcon} 
          alt="" 
          className="settings-icon" 
          aria-hidden="true"
          loading="lazy"
        />
      </button>
    </div>
  )
}

export default UserProfile
