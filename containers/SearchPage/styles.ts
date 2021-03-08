import styled from 'styled-components'
import { KeyboardArrowDown } from '@styled-icons/material-rounded/KeyboardArrowDown'

export const Wrapper = styled.div`
  max-width: 90vw;
  margin: auto;
`

export const HeaderSide = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;

  h1 {
    margin: 0;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    color: #000000;
  }
`

export const ChevronDownIcon = styled(KeyboardArrowDown).attrs({ size: '2em' })`
  color: #9fa6b0;
  position: absolute;
  right: 12px;
`

export const ContentSide = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  column-gap: 40px;
`

export const MovieListSection = styled.section<{ $movieHeight: number | null }>`
  max-height: ${(props) => (props.$movieHeight ? `${props.$movieHeight}px` : 'auto')};
  overflow-y: scroll;
`

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 28px;
  padding-top: 35px;
`

export const MovieCardWrapper = styled.a.attrs({ target: 'blank', rel: 'noreferrer' })`
  text-decoration: none;

  h5 {
    transition: color 0.3s;
  }

  &:hover {
    h5 {
      color: #11cfbc;
    }
  }
`
