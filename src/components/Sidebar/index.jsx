import React, { useState } from 'react'
import StrykeLogo from '../../assets/images/Stryke.svg'
import XLogo from '../../assets/images/X.svg'
import DashboardIcon from '../../assets/images/DashboardIcon.svg'
import BriefcaseIcon from '../../assets/images/Briefcase.svg'
import ZigZagIcon from '../../assets/images/zig-zag.svg'
import BarChartIcon from '../../assets/images/BarChart.svg'
import UserIcon from '../../assets/images/user.svg'
import WhiteXIcon from '../../assets/images/white-X.svg'
import StarIcon from '../../assets/images/star.svg'
import BlueSidebarBg from '../../assets/images/bluesidebarbg.png'
import MaleIcon from '../../assets/images/Male.svg'
import SettingsIcon from '../../assets/images/settings.svg'
import './Sidebar.css'

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeItem, setActiveItem] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleNavClick = (item) => {
    setActiveItem(item)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Navigation items data
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'portfolio', label: 'Portfolio', icon: BriefcaseIcon },
    { id: 'pre-built-algos', label: 'Pre-Built Algos', icon: ZigZagIcon, hasChevron: true },
    { id: 'my-algos', label: 'My Algos', icon: BarChartIcon },
    { id: 'my-account', label: 'My Account', icon: UserIcon }
  ]

  // Filter nav items based on search query
  const filteredNavItems = navItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        {sidebarOpen && (
          <>
            <div className="logo">
              <img src={StrykeLogo} alt="Stryke" className="logo-stryke-svg" />
              <img src={XLogo} alt="X" className="logo-x-svg" />
            </div>
            
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <svg className="search-icon" width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14L11.1 11.1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </>
        )}

        <div className="nav-items">
          {filteredNavItems.map((item) => (
            <div 
              key={item.id}
              className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {activeItem === item.id && <div className="active-side-box"></div>}
              <img src={item.icon} alt={item.label} className="nav-icon" />
              {sidebarOpen && <span>{item.label}</span>}
              {sidebarOpen && item.hasChevron && (
                <svg className="chevron-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>

        {sidebarOpen && (
          <>
            <div className="promo-card" style={{ backgroundImage: `url(${BlueSidebarBg})` }}>
              <img src={WhiteXIcon} alt="X" className="promo-logo" />
              <div className="promo-title">Contact Us</div>
              <div className="promo-description">A.I Trading Bots Trading Bots Lorem Ipsum</div>
              <button className="promo-button">Support</button>
            </div>

            <div className="credits-section">
              <div className="credits-icon-container">
                <img src={StarIcon} alt="Star" className="credits-icon" />
              </div>
              <span className="credits-label">Live Credits</span>
              <div className="credits-count-badge">
                <span className="credits-count-current">2</span>
                <span className="credits-count-total">/4</span>
              </div>
            </div>
          </>
        )}

        <div className="user-profile">
          <div className="user-avatar">
            <img src={MaleIcon} alt="User" className="user-avatar-icon" />
          </div>
          {sidebarOpen && <span className="user-name">John Smith</span>}
          <button className="settings-button">
            <img src={SettingsIcon} alt="Settings" className="settings-icon" />
          </button>
        </div>
      </div>
      
      <div className="sidebar-border">
        <button className="collapse-button" onClick={toggleSidebar}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d={sidebarOpen ? "M7.5 2.5L4.5 6L7.5 9.5" : "M4.5 2.5L7.5 6L4.5 9.5"} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Sidebar


