import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navItemVariants, getNavItemTransition, navItemHover } from '../animations'
import DashboardIcon from '../../../assets/images/DashboardIcon.svg'
import BriefcaseIcon from '../../../assets/images/Briefcase.svg'
import ZigZagIcon from '../../../assets/images/zig-zag.svg'
import BarChartIcon from '../../../assets/images/BarChart.svg'
import UserIcon from '../../../assets/images/user.svg'
import './NavItem.css'

// Icon mapping
const ICON_MAP = {
  DashboardIcon,
  BriefcaseIcon,
  ZigZagIcon,
  BarChartIcon,
  UserIcon
}

/**
 * NavItem component for sidebar navigation with routing
 * @param {Object} item - Navigation item data (must include path property)
 * @param {number} index - Index for staggered animation
 * @param {boolean} sidebarOpen - Whether sidebar is open
 */
const NavItem = ({ item, index, sidebarOpen }) => {
  const location = useLocation()
  const icon = ICON_MAP[item.icon]
  const isActive = location.pathname === item.path

  return (
    <motion.div
      initial={navItemVariants.hidden}
      animate={navItemVariants.visible}
      transition={getNavItemTransition(index)}
      whileHover={navItemHover}
    >
      <Link
        to={item.path}
        className={`nav-item ${isActive ? 'active' : ''}`}
        aria-label={item.label}
        aria-current={isActive ? 'page' : undefined}
      >
        {isActive && <div className="active-side-box" aria-hidden="true"></div>}
        <img 
          src={icon} 
          alt="" 
          className="nav-icon" 
          aria-hidden="true"
          loading="lazy"
        />
        {sidebarOpen && (
          <span className="nav-item-label">{item.label}</span>
        )}
        {sidebarOpen && item.hasChevron && (
          <svg 
            className="chevron-icon" 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none"
            aria-hidden="true"
          >
            <path 
              d="M3 4.5L6 7.5L9 4.5" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link>
    </motion.div>
  )
}

export default NavItem
