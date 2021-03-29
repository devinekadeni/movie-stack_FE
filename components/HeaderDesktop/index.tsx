import { useContext } from 'react'
import Link from 'next/link'

import { UserCircle as UserIcon } from '@styled-icons/boxicons-solid/UserCircle'

import SearchMovie from '@/containers/SearchMovie'
import { AuthContext } from '@/context/AuthContext'
import {
  Wrapper,
  LeftSide,
  RightSide,
  Logo,
  Nav,
  AuthButton,
  Languages,
  UserAccount,
  AuthWrapper,
} from './styles'

const HeaderDesktop: React.FC = () => {
  const [{ isLoggedIn, user }, dispatch] = useContext(AuthContext)

  return (
    <Wrapper>
      <LeftSide>
        <Logo src="/logo.png" alt="logo" />
        <Link href="/" passHref>
          <Nav>HOME</Nav>
        </Link>
        <Link href="/movies" passHref>
          <Nav>MOVIES</Nav>
        </Link>
        {isLoggedIn && (
          <Link href="/my-list" passHref>
            <Nav>MY LIST</Nav>
          </Link>
        )}
        <SearchMovie />
      </LeftSide>
      <RightSide>
        <Languages>
          <Nav href="#">EN</Nav>
          <Nav href="#">ID</Nav>
        </Languages>
        <span style={{ color: '#CAD3E1' }}>|</span>
        {isLoggedIn ? (
          <UserAccount>
            <UserIcon size="24" />
            <span>{user.name}</span>
          </UserAccount>
        ) : (
          <AuthWrapper>
            <AuthButton onClick={() => dispatch({ type: 'OPEN_SIGN_IN', payload: true })}>
              LOGIN
            </AuthButton>
            <AuthButton onClick={() => dispatch({ type: 'OPEN_SIGN_UP', payload: true })}>
              REGISTER
            </AuthButton>
          </AuthWrapper>
        )}
      </RightSide>
    </Wrapper>
  )
}

export default HeaderDesktop
