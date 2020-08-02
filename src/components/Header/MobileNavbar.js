import React from 'react'
import { Home } from '@styled-icons/material-sharp/Home'
import { LocalMovies } from '@styled-icons/material/LocalMovies'
import { List } from '@styled-icons/feather/List'
import { AccountCircle } from '@styled-icons/material-rounded/AccountCircle'
import { NavbarWrapper, MobileMenutItem } from './styles'

const MobileNavbar = () => {
  return (
    <NavbarWrapper>
      <MobileMenutItem activeClassName="active-link" exact to="/">
        <Home />
        <span>Home</span>
      </MobileMenutItem>
      <MobileMenutItem activeClassName="active-link" to="/movies">
        <LocalMovies />
        <span>Movies</span>
      </MobileMenutItem>
      <MobileMenutItem activeClassName="active-link" to="/my-list">
        <List />
        <span>My List</span>
      </MobileMenutItem>
      <MobileMenutItem activeClassName="active-link" to="/account">
        <AccountCircle />
        <span>Account</span>
      </MobileMenutItem>
    </NavbarWrapper>
  )
}

export default MobileNavbar
