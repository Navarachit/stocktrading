/**
 * Filters navigation items based on search query
 * @param {Array} items - Array of navigation items
 * @param {string} query - Search query string
 * @returns {Array} Filtered navigation items
 */
export const filterNavItems = (items, query) => {
  if (!query || !query.trim()) return items
  
  const lowerQuery = query.toLowerCase().trim()
  return items.filter(item => 
    item.label.toLowerCase().includes(lowerQuery)
  )
}
