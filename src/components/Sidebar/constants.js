// Navigation items configuration with routes
export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'DashboardIcon', path: '/dashboard' },
  { id: 'portfolio', label: 'Portfolio', icon: 'BriefcaseIcon', path: '/portfolio' },
  { id: 'pre-built-algos', label: 'Pre-Built Algos', icon: 'ZigZagIcon', hasChevron: true, path: '/pre-built-algos' },
  { id: 'my-algos', label: 'My Algos', icon: 'BarChartIcon', path: '/my-algos' },
  { id: 'my-account', label: 'My Account', icon: 'UserIcon', path: '/my-account' }
]

// Default route (for now all routes point to dashboard)
export const DEFAULT_ROUTE = '/dashboard'

// User data
export const USER_DATA = {
  name: 'John Smith',
  avatar: 'Male.svg'
}

// Credits data
export const CREDITS_DATA = {
  current: 2,
  total: 4
}

// Promo card data
export const PROMO_CARD_DATA = {
  title: 'Contact Us',
  description: 'A.I Trading Bots Trading Bots Lorem Ipsum',
  buttonText: 'Support'
}

// Sidebar configuration
export const SIDEBAR_CONFIG = {
  OPEN_WIDTH: '15.683%',
  TRANSITION_DURATION: 0.3,
  ANIMATION_STAGGER_DELAY: 0.05
}
