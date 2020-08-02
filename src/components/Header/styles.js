import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BASIC_COLOR } from 'styles/_colors'

// Mobile
export const NavbarWrapper = styled.div`
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
    color: ${BASIC_COLOR.mainGreen};
  }
`

export const MobileMenutItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 2rem;
    margin-bottom: 7px;
    color: ${(props) => (props.isActive ? BASIC_COLOR.mainGreen : '#9fa6b0')};
  }

  span {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 17px;
    color: #9fa6b0;
  }
`

// Desktop
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 45px;
  max-width: 1300px;
  margin: 0 auto;

  .active-link > span {
    color: ${BASIC_COLOR.mainGreen};
  }

  .left-side {
    display: grid;
    grid-template-columns: repeat(5, auto);
    column-gap: 30px;
    align-items: center;
  }

  .right-side {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 30px;
    align-items: center;
  }
`

export const MenuLogo = styled(NavLink)`
  margin-right: 30px;

  img {
    width: 77px;
    height: 40px;
    border-radius: 6px;
  }
`

export const MenuItem = styled(NavLink)`
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 18px;
    color: #000000;
  }
`

// Localization
export const LocalButton = styled.button`
  background-color: unset;
  color: #000000;
  padding: 0;
  margin: 0 6px;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`
