import React from 'react'
import './SearchBar.css'

/**
 * SearchBar component for filtering navigation items
 * @param {string} value - Current search query value
 * @param {Function} onChange - Handler for search input changes
 */
const SearchBar = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search" 
        value={value}
        onChange={handleChange}
        aria-label="Search navigation items"
      />
      <svg 
        className="search-icon" 
        width="20" 
        height="20" 
        viewBox="0 0 16 16" 
        fill="none"
        aria-hidden="true"
      >
        <path 
          d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M14 14L11.1 11.1" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default SearchBar
