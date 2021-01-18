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
