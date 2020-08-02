import React from 'react'

import MobileNavbar from './MobileNavbar'
import DesktopHeader from './DesktopHeader'
import useWindowSize from 'helpers/customHooks/useWindowSize'

const Header = () => {
  const isMobile = useWindowSize().width < 800

  return isMobile ? <MobileNavbar /> : <DesktopHeader />
}

export default Header
