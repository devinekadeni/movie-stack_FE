import React from 'react'
import logoUrl from 'assets/logo.png'
import Localization from './Localization'
import { Wrapper, MenuLogo, MenuItem } from './styles'

const locale = 'en' // TODO: change to react-i18next

const DesktopHeader = () => {
  return (
    <Wrapper>
      <div className="left-side">
        <MenuLogo exact to="/">
          <img src={logoUrl} alt="logo_image" />
        </MenuLogo>
        <MenuItem activeClassName="active-link" exact to="/">
          <span>Home</span>
        </MenuItem>
        <MenuItem activeClassName="active-link" to="/movies">
          <span>Movies</span>
        </MenuItem>
        <MenuItem activeClassName="active-link" to="/my-list">
          <span>My List</span>
        </MenuItem>
      </div>
      <div className="right-side">
        <Localization activeLocale={locale} />
        <MenuItem activeClassName="active-link" to="/login">
          <span>LOGIN</span>
        </MenuItem>
        <MenuItem activeClassName="active-link" to="/register">
          <span>REGISTER</span>
        </MenuItem>
      </div>
    </Wrapper>
  )
}

export default DesktopHeader
