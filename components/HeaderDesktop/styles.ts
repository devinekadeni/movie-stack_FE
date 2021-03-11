import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 39px 100px;
  background-color: white;

  & > div:first-child {
    display: grid;
    grid-template-columns: repeat(4, auto) 1fr;
    align-items: center;
    column-gap: 32px;
    width: 100%;
  }

  & > div:last-child {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: flex-end;
    column-gap: 32px;
  }
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

export const Languages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 4px;
`
