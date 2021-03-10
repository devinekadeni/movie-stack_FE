import styled from 'styled-components'
import InputMUI from '@material-ui/core/Input'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
