import React from 'react'
import DashboardIcon from '../../assets/images/DashboardIcon.svg'
import MaleIcon from '../../assets/images/Male.svg'
import DhaIcon from '../../assets/images/dha.svg'
import RefreshIcon from '../../assets/images/refresh.svg'
import ChainLinkIcon from '../../assets/images/chain-link.svg'
import SupportIcon from '../../assets/images/support.svg'
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
              <img src={DhaIcon} alt="DHA" className="dha-icon" />
            </div>
            <div className="margin-info">
              <div className="margin-label-row">
                <span className="margin-label">Margin Available</span>
                <button className="refresh-button">
                  <img src={RefreshIcon} alt="Refresh" className="refresh-icon" />
                </button>
              </div>
              <div className="token-expiry">Token Expiry: 30th Dec 25 | 12:22 AM</div>
            </div>
          </div>
          <div className="margin-box-right">
            <div className="margin-amount-section">
              <div className="margin-amount">
                <span className="currency">₹</span>
                <span className="amount">20,00,764.64</span>
              </div>
              <div className="connected-status">
                <span>Connected</span>
                <img src={ChainLinkIcon} alt="Chain Link" className="link-icon" />
              </div>
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
          <img src={SupportIcon} alt="Support" className="support-icon" />
        </button>
        <button className="header-icon-button notification-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2.5C7.23858 2.5 5 4.73858 5 7.5V12.5L3.33333 14.1667V15H16.6667V14.1667L15 12.5V7.5C15 4.73858 12.7614 2.5 10 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 15V15.8333C7.5 17.214 8.61929 18.3333 10 18.3333C11.3807 18.3333 12.5 17.214 12.5 15.8333V15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="notification-badge">1</span>
        </button>
        <div className="header-divider"></div>
        <div className="user-profile-header">
          <div className="user-avatar-wrapper">
            <img src={MaleIcon} alt="User" className="user-avatar" />
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

