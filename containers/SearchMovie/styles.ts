import styled from 'styled-components'
import InputMUI from '@material-ui/core/Input'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 50%;
`

export const StyledSearchIcon = styled(SearchIcon).attrs({
  size: '1.8rem',
  title: 'search movies',
})<{ $isHidden: boolean }>`
  position: absolute;
  color: #9fa6b0;
  cursor: pointer;
  opacity: ${(p) => (p.$isHidden ? 0 : 1)};
  transition: opacity 1s;
`

export const Input = styled(InputMUI)<{ $isHidden: boolean }>`
  position: absolute;
  transition: width 0.5s ease-in-out;
  width: ${(p) => (p.$isHidden ? '0' : '100%')};
  overflow: ${(p) => (p.$isHidden ? 'hidden' : 'initial')};
`

export const SearchResult = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 12px;
  width: 100%;
  box-shadow: 0px 0px 5px 2px rgba(169, 169, 169, 0.75);
  max-height: 50vh;
  overflow-y: scroll;
  border-radius: 4px;
  background-color: #ffffff;
  overflow-x: hidden;
`
