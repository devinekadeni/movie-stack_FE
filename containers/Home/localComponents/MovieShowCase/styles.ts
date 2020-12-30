import styled from 'styled-components'
import { BASIC_COLOR } from '@/styles/_colors'
import { SCREEN } from '@/styles/mediaBreakPoint'

export const Wrapper = styled.div`
  font-size: 1.6rem;
  max-width: 90vw;
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 12fr;
  column-gap: 30px;
`

export const CategoryWrapper = styled.div`
  & > h2 {
    white-space: pre-line;
    font-weight: bold;
    font-size: 3.8rem;
    line-height: 4.4rem;
    text-transform: uppercase;
    margin: 0 0 24px;

    @media screen and (max-width: ${SCREEN.desktop}) {
      font-size: 2.8rem;
      line-height: 3rem;
    }
  }
`

export const Line = styled.div`
  width: 72px;
  height: 8px;
  background-color: ${BASIC_COLOR.primaryColor};
`

export const ScrollButtonWrapper = styled.div`
  margin-top: 120px;
  display: inline-grid;
  grid-template-columns: auto auto;
  column-gap: 12px;

  & > span {
    cursor: pointer;
    color: #e4eaf3;
    transition: color 0.3s;

    &:hover {
      color: ${BASIC_COLOR.primaryColor};
    }
  }
`

export const MovieListWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ itemCount }: { itemCount: number }) =>
    `repeat(${itemCount}, 20%)`};
  column-gap: 5%;
  overflow-x: scroll;

  a {
    text-decoration: unset;

    & > div > h5 {
      transition: color 0.3s;
    }
  }

  a:hover {
    & > div > h5 {
      color: #11cfbc;
    }
  }
`
