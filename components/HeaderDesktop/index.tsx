import { useContext } from 'react'
import Link from 'next/link'
import SearchMovie from '@/containers/SearchMovie'
import { AuthContext } from '@/context/AuthContext'
import { Wrapper, Logo, Nav, AuthButton, Languages } from './styles'

const HeaderDesktop: React.FC = () => {
  const [, dispatch] = useContext(AuthContext)

  return (
    <Wrapper>
      <div>
        <Logo src="/logo.png" alt="logo" />
        <Link href="/" passHref>
          <Nav>HOME</Nav>
        </Link>
        <Link href="/movies" passHref>
          <Nav>MOVIES</Nav>
        </Link>
        <Link href="/my-list" passHref>
          <Nav>MY LIST</Nav>
        </Link>
        <SearchMovie />
      </div>
      <div>
        <AuthButton onClick={() => dispatch({ type: 'OPEN_SIGN_IN', payload: true })}>
          LOGIN
        </AuthButton>
        <AuthButton onClick={() => dispatch({ type: 'OPEN_SIGN_UP', payload: true })}>
          REGISTER
        </AuthButton>
        <Languages>
          <Nav href="#">EN</Nav>
          <span>|</span>
          <Nav href="#">ID</Nav>
        </Languages>
      </div>
    </Wrapper>
  )
}

export default HeaderDesktop
