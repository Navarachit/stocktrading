import React from 'react'
import './Greeting.css'

function Greeting() {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="greeting-section">
      <h1 className="greeting-text">
        <span className="greeting-greeting">👋{getGreeting()}, </span>
        <span className="greeting-name">Sambhav Singhvi</span>
      </h1>
    </div>
  )
}

export default Greeting

