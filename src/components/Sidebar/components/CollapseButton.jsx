import React from 'react'
import './CollapseButton.css'

/**
 * CollapseButton component for toggling sidebar visibility
 * @param {boolean} isOpen - Whether sidebar is currently open
 * @param {Function} onClick - Click handler
 */
const CollapseButton = ({ isOpen, onClick }) => {
  const handleClick = () => {
    onClick()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  const pathData = isOpen 
    ? "M7.5 2.5L4.5 6L7.5 9.5" 
    : "M4.5 2.5L7.5 6L4.5 9.5"

  return (
    <button 
      className="collapse-button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      aria-expanded={isOpen}
      type="button"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path 
          d={pathData} 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default CollapseButton
