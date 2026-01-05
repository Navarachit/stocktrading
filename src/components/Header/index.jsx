import React from 'react'
import DashboardIcon from '../../assets/images/DashboardIcon.svg'
import UserIcon from '../../assets/images/user.svg'
import './Header.css'

function Header() {
  return (
    <div className="header">
      {/* Left Section - Dashboard */}
      <div className="header-left">
        <img src={DashboardIcon} alt="Dashboard" className="dashboard-icon" />
        <span className="dashboard-text">Dashboard</span>
      </div>

      {/* Right Section - Margin Available, Icons and User Profile */}
      <div className="header-right-section">
        {/* Margin Available Box */}
        <div className="margin-box">
          <div className="margin-box-left">
            <div className="margin-icon">
              <span className="margin-icon-text">ध</span>
            </div>
            <div className="margin-info">
              <div className="margin-label">Margin Available</div>
              <div className="margin-amount">
                <span className="currency">₹</span>
                <span className="amount">20,00,764.64</span>
              </div>
              <div className="token-expiry">Token Expiry: 30th Dec 25 | 12:22 AM</div>
            </div>
          </div>
          <div className="margin-box-right">
            <div className="connected-status">
              <svg className="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L7.5 4.5L11 6L7.5 7.5L6 11L4.5 7.5L1 6L4.5 4.5L6 1Z" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
              <span>Connected</span>
            </div>
            <button className="margin-menu-button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="4" r="1.5" fill="currentColor"/>
                <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Icons and User Profile */}
        <div className="header-right">
        <button className="header-icon-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="7" r="3.5" stroke="white" strokeWidth="1.5" fill="none"/>
            <path d="M5 16.5C5 13.1863 7.18629 10.5 10.5 10.5C13.8137 10.5 16.5 13.1863 16.5 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <text x="10" y="12.5" textAnchor="middle" fill="white" fontSize="7" fontFamily="Arial, sans-serif" fontWeight="bold">@</text>
          </svg>
        </button>
        <button className="header-icon-button notification-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2.5C7.23858 2.5 5 4.73858 5 7.5V12.5L3.33333 14.1667V15H16.6667V14.1667L15 12.5V7.5C15 4.73858 12.7614 2.5 10 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 15V15.8333C7.5 17.214 8.61929 18.3333 10 18.3333C11.3807 18.3333 12.5 17.214 12.5 15.8333V15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="notification-badge">1</span>
        </button>
        <div className="header-divider"></div>
        <div className="user-profile">
          <div className="user-avatar-wrapper">
            <img src={UserIcon} alt="User" className="user-avatar" />
            <div className="online-status"></div>
          </div>
          <div className="user-info">
            <div className="user-name">John Smith</div>
            <div className="user-username">@alphatrader</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header

