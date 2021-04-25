import { useContext, useState } from 'react'
import Link from 'next/link'

import { UserCircle as UserIcon } from '@styled-icons/boxicons-solid/UserCircle'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

import SearchMovie from '@/containers/SearchMovie'
import { AuthContext } from '@/context/AuthContext'
import API from '@/helpers/ApiHandler'

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleLogout = async () => {
    await API.call({ method: 'POST', url: '/user/signout' })

    API.logout()
    dispatch({ type: 'SET_USER_SESSION', payload: { isLoggedIn: false, user: null } })
  }

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
          <>
            <UserAccount onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}>
              <UserIcon size="24" />
              <span>{user.name}</span>
            </UserAccount>
            <Popper
              open={!!anchorEl}
              anchorEl={anchorEl}
              placement="bottom-start"
              disablePortal
            >
              <Paper elevation={3} style={{ marginTop: 4 }}>
                <MenuList>
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </MenuList>
              </Paper>
            </Popper>
          </>
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
