import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Home } from '@styled-icons/material-sharp/Home'
import { LocalMovies } from '@styled-icons/material/LocalMovies'
import { List } from '@styled-icons/feather/List'
import { AccountCircle } from '@styled-icons/material-rounded/AccountCircle'

const NavbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(219, 222, 226, 0.3);
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0 7px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  .active-link > svg {
    color: #20c8a2;
  }
`

const MenuItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 2rem;
    margin-bottom: 7px;
    color: ${(props) => (props.isActive ? '#20C8A2' : '#9fa6b0')};
  }

  span {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 17px;
    color: ${(props) => (props.selected ? '##20C8A2' : '#9fa6b0')};
  }
`

const MobileNavbar = () => {
  return (
    <NavbarWrapper>
      <MenuItem activeClassName="active-link" exact to="/">
        <Home />
        <span>Home</span>
      </MenuItem>
      <MenuItem activeClassName="active-link" to="/movies">
        <LocalMovies />
        <span>Movies</span>
      </MenuItem>
      <MenuItem activeClassName="active-link" to="/my-list">
        <List />
        <span>My List</span>
      </MenuItem>
      <MenuItem activeClassName="active-link" to="/account">
        <AccountCircle />
        <span>Account</span>
      </MenuItem>
    </NavbarWrapper>
  )
}

export default MobileNavbar
