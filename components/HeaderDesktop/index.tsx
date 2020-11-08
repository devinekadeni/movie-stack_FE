import React from 'react'
import Link from 'next/link'
import { Wrapper, Logo, Nav, SearchIcon, Languages } from './styles'

const HeaderDesktop: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <Logo src="logo.png" alt="logo" />
        <Link href="/" passHref>
          <Nav>HOME</Nav>
        </Link>
        <Link href="/movies" passHref>
          <Nav>MOVIES</Nav>
        </Link>
        <Link href="/my-list" passHref>
          <Nav>MY LIST</Nav>
        </Link>
        <SearchIcon />
      </div>
      <div>
        <Link href="/login" passHref>
          <Nav>LOGIN</Nav>
        </Link>
        <Link href="/register" passHref>
          <Nav>REGISTER</Nav>
        </Link>
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
