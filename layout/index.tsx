import { useRef, useEffect, useState, useContext } from 'react'

import { AuthContext } from '@/context/AuthContext'
import API from '@/helpers/ApiHandler'

import HeaderDesktop from '@/components/HeaderDesktop'

import { Wrapper, HeaderWrapper } from './styles'

const Layout: React.FC = (props) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerEl = useRef<null | HTMLDivElement>(null)
  const [, dispatch] = useContext(AuthContext)

  useEffect(() => {
    validateSession()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const validateSession = async () => {
    try {
      const { data: resToken } = await API.call({
        method: 'POST',
        url: '/user/refresh_token',
      })

      API.login(resToken.data.access_token)

      const { data: resUser } = await API.call({
        method: 'GET',
        url: '/user',
      })

      dispatch({
        type: 'SET_USER_SESSION',
        payload: {
          isLoggedIn: true,
          user: resUser.data,
        },
      })
    } catch (error) {
      dispatch({
        type: 'SET_USER_SESSION',
        payload: {
          isLoggedIn: false,
          user: null,
        },
      })
    }
  }

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
