import React, { useRef, useEffect, useState } from 'react'

import HeaderDesktop from '@/components/HeaderDesktop'

import { Wrapper, HeaderWrapper } from './styles'

const Layout: React.FC = (props) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerEl = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const scrollPosition = document.documentElement.scrollTop
    if (scrollPosition >= 1) {
      setIsScrolled(true)
    } else if (scrollPosition === 0) {
      setIsScrolled(false)
    }
  }

  return (
    <Wrapper>
      <HeaderWrapper ref={headerEl} isScrolled={isScrolled}>
        <HeaderDesktop />
      </HeaderWrapper>
      {props.children}
    </Wrapper>
  )
}

export default Layout
