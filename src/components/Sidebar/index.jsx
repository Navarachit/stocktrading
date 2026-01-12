import React, { useState, useMemo, useCallback } from 'react'
import { NAV_ITEMS, USER_DATA, CREDITS_DATA, PROMO_CARD_DATA, SIDEBAR_CONFIG } from './constants'
import { filterNavItems } from './utils'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import NavItem from './components/NavItem'
import PromoCard from './components/PromoCard'
import CreditsSection from './components/CreditsSection'
import UserProfile from './components/UserProfile'
import CollapseButton from './components/CollapseButton'
import './Sidebar.css'

/**
 * Sidebar component - Main navigation sidebar with user profile and settings
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeItem, setActiveItem] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  // Memoized filtered navigation items
  const filteredNavItems = useMemo(() => {
    return filterNavItems(NAV_ITEMS, searchQuery)
  }, [searchQuery])

  // Handlers with useCallback for performance
  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev)
  }, [])

  const handleNavClick = useCallback((itemId) => {
    setActiveItem(itemId)
  }, [])

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value)
  }, [])

  const handleSettingsClick = useCallback(() => {
    // TODO: Implement settings modal/page navigation
    console.log('Settings clicked')
  }, [])

  return (
    <div 
      className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="sidebar-content">
        {/* Header Section */}
        {sidebarOpen && (
          <>
            <Logo />
            <SearchBar 
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </>
        )}

        {/* Navigation Items */}
        <nav className="nav-items" aria-label="Navigation menu">
          {filteredNavItems.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              index={index}
              isActive={activeItem === item.id}
              sidebarOpen={sidebarOpen}
              onClick={handleNavClick}
            />
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="sidebar-bottom-section">
          {sidebarOpen && (
            <>
              <PromoCard data={PROMO_CARD_DATA} />
              <CreditsSection credits={CREDITS_DATA} />
            </>
          )}

          <UserProfile 
            user={USER_DATA}
            sidebarOpen={sidebarOpen}
            onSettingsClick={handleSettingsClick}
          />
        </div>
      </div>
      
      {/* Sidebar Border with Collapse Button */}
      <div className="sidebar-border">
        <CollapseButton 
          isOpen={sidebarOpen}
          onClick={handleToggleSidebar}
        />
      </div>
    </div>
  )
}

export default Sidebar
