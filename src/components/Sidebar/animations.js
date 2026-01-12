// Animation variants for framer-motion

export const navItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

export const getNavItemTransition = (index, staggerDelay = 0.05) => ({
  duration: 0.3,
  delay: index * staggerDelay
})

export const navItemHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
}
