import React, { useRef, useEffect, useState } from 'react'

import HeaderDesktop from '@/components/HeaderDesktop'

import { Wrapper, HeaderWrapper } from './styles'

const Layout: React.FC = (props) => {
  const [headerHeight, setHeaderHeight] = useState(120)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerEl = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    setHeaderHeight(headerEl?.current?.clientHeight || 120)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [null])

  const handleScroll = () => {
    const scrollPosition = document.documentElement.scrollTop
    if (scrollPosition >= 1) {
      setIsScrolled(true)
    } else if (scrollPosition === 0) {
      setIsScrolled(false)
    }
  }

  return (
    <Wrapper headerHeight={headerHeight}>
      <HeaderWrapper ref={headerEl} isScrolled={isScrolled}>
        <HeaderDesktop />
      </HeaderWrapper>
      {props.children}
    </Wrapper>
  )
}

export default Layout
