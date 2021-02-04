import styled from 'styled-components'
import ChipMUI from '@material-ui/core/Chip'

export const Wrapper = styled.div``

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin: 0;
  }

  button {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #11cfbc;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const FilterSection = styled.div`
  padding: 24px;
  background: #f8fafc;
  border-radius: 16px;
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding-top: 8px;
`

export const GenreList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
`

interface ChipProps {
  $isSelected?: boolean
}
export const Chip = styled(ChipMUI)<ChipProps>`
  && {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #009f92;
    padding: 8px 16px;
    transition: opacity 0.3s;
    ${(props) => props.$isSelected && 'background-color: #CCFFF3;'}

    &:focus, &:hover {
      && {
        background-color: ${(props) => (props.$isSelected ? '#CCFFF3' : 'initial')};
      }
    }

    &:hover {
      opacity: 0.8;
    }

    & > span:first-child {
      padding: 0;
    }
  }
`
