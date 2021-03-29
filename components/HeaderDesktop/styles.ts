import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 39px 100px;
  background-color: white;
`

export const LeftSide = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto) 1fr;
  align-items: center;
  column-gap: 32px;
  width: 100%;
`

export const RightSide = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: flex-end;
  column-gap: 24px;
`

export const Logo = styled.img`
  width: 77px;
  object-fit: contain;
  margin-right: 27px;
`

export const Nav = styled.a`
  font-size: 1em;
  color: #212121;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const AuthButton = styled.button`
  background-color: unset;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  color: #212121;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const Languages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 8px;
`

export const UserAccount = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 12px;
`

export const AuthWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 32px;
`
