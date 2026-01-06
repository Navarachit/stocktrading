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
            <img src={UserIcon} alt="User" className="user-avatar-icon" />
          </div>
          {sidebarOpen && <span className="user-name">John Smith</span>}
          <button className="settings-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="white" strokeWidth="1.5"/>
              <path d="M13.3333 8C13.3333 7.63181 13.4738 7.27857 13.7239 7.02852C13.9739 6.77848 14.3272 6.638 14.6953 6.638C15.0635 6.638 15.4167 6.77848 15.6668 7.02852C15.9168 7.27857 16.0573 7.63181 16.0573 8C16.0573 8.36819 15.9168 8.72143 15.6668 8.97148C15.4167 9.22152 15.0635 9.362 14.6953 9.362C14.3272 9.362 13.9739 9.22152 13.7239 8.97148C13.4738 8.72143 13.3333 8.36819 13.3333 8Z" stroke="white" strokeWidth="1.5"/>
              <path d="M2.66667 8C2.66667 7.63181 2.80715 7.27857 3.05719 7.02852C3.30724 6.77848 3.66048 6.638 4.02867 6.638C4.39686 6.638 4.7501 6.77848 5.00014 7.02852C5.25019 7.27857 5.39067 7.63181 5.39067 8C5.39067 8.36819 5.25019 8.72143 5.00014 8.97148C4.7501 9.22152 4.39686 9.362 4.02867 9.362C3.66048 9.362 3.30724 9.22152 3.05719 8.97148C2.80715 8.72143 2.66667 8.36819 2.66667 8Z" stroke="white" strokeWidth="1.5"/>
              <path d="M8 2.66667C8 2.29848 8.14048 1.94524 8.39052 1.69519C8.64057 1.44515 8.99381 1.30467 9.362 1.30467C9.73019 1.30467 10.0834 1.44515 10.3335 1.69519C10.5835 1.94524 10.724 2.29848 10.724 2.66667C10.724 3.03486 10.5835 3.3881 10.3335 3.63814C10.0834 3.88819 9.73019 4.02867 9.362 4.02867C8.99381 4.02867 8.64057 3.88819 8.39052 3.63814C8.14048 3.3881 8 3.03486 8 2.66667Z" stroke="white" strokeWidth="1.5"/>
              <path d="M8 13.3333C8 12.9651 8.14048 12.6119 8.39052 12.3618C8.64057 12.1118 8.99381 11.9713 9.362 11.9713C9.73019 11.9713 10.0834 12.1118 10.3335 12.3618C10.5835 12.6119 10.724 12.9651 10.724 13.3333C10.724 13.7015 10.5835 14.0547 10.3335 14.3048C10.0834 14.5548 9.73019 14.6953 9.362 14.6953C8.99381 14.6953 8.64057 14.5548 8.39052 14.3048C8.14048 14.0547 8 13.7015 8 13.3333Z" stroke="white" strokeWidth="1.5"/>
            </svg>
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


