import styled from 'styled-components'
import BaseMovieCard from '@/components/MovieCard'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr 2fr;
  max-width: 1600px;
  margin: auto;
`

export const PosterSection = styled.section`
  padding-top: 16px;
  max-height: 85vh;
  overflow-y: scroll;
`

export const MovieCard = styled(BaseMovieCard)`
  max-width: 280px;
  margin: auto;

  & > div:first-child {
    height: 420px;
  }

  & > h5 {
    font-size: 32px;
    line-height: 48px;
    margin: 24px 0 12px;
  }

  & > span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    overflow: initial;
    -webkit-line-clamp: initial;
    -webkit-box-orient: initial;
    display: initial;
  }
`

export const ActionButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d8dee2;
  border-bottom: 1px solid #d8dee2;
  margin-top: 85px;
  position: relative;

  & > span {
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 1px;
    height: 100%;
    background-color: #d8dee2;
  }

  button {
    flex: 1;
    border: none;
    border-radius: unset;
    outline: none;
    background-color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.5px;
    color: #8d96aa;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    & > svg {
      margin-right: 10px;
    }

    &:hover {
      background-color: #11cfbc;
      color: #fff;
    }
  }
`

export const SummarySection = styled.section`
  background-color: #f8fafc;
  padding: 48px;
  max-height: 85vh;
  overflow-y: scroll;
`

export const InfoSection = styled.article`
  display: inline-flex;

  & > div:first-child {
    margin-right: 56px;
  }
  & > div:nth-child(2) {
    margin-right: 87px;
  }
`

export const Synopsis = styled.article`
  display: grid;
  row-gap: 8px;
  margin-top: 32px;

  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 24px;
    color: #212121;
    margin: 0;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 24px;
    color: #40464e;
    margin: 0;
  }
`

export const CastSection = styled.article`
  margin-top: 40px;

  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 21px;
    color: #212121;
    margin: 0 0 24px;
  }
`

export const CastList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 48px;
  row-gap: 32px;
  margin-bottom: 32px;
`

interface MoreCastListProps {
  containerHeight: number
  toggleCast: boolean
}

export const MoreCastList = styled.div<MoreCastListProps>`
  transition: height 0.3s, opacity 0.3s 0.1s;
  height: ${(props) => `${props.containerHeight}px`};
  overflow-y: ${(props) => (props.toggleCast ? 'auto' : 'hidden')};
  opacity: ${(props) => (props.toggleCast ? 1 : 0)};
  margin-bottom: ${(props) => (props.toggleCast ? '28px' : '0')};

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 48px;
    row-gap: 32px;
  }
`

interface SeeMoreCastProps {
  toggleCast: boolean
}

export const SeeMoreCast = styled.div<SeeMoreCastProps>`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #11cfbc;
  cursor: pointer;
  transition: opacity 0.3s;
  outline: none;

  &:hover {
    opacity: 0.7;
  }

  svg {
    transition: transform 0.4s;
    ${(props) => (props.toggleCast ? 'transform: rotate(180deg);' : '')}
  }

  .rotate-down {
    transform: rotate(180deg);
  }
`

export const MediaSection = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 85vh;
  overflow-y: scroll;
`

export const Backdrop = styled.div`
  display: flex;
  min-height: 156px;
  transition: border 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid #11cfbc;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const ArrowButton = styled.span<{ direction: string }>`
  position: fixed;
  top: 50%;
  color: #e3e3e3;
  cursor: pointer;
  transition: opacity 0.3s;
  ${(props) => (props.direction === 'left' ? 'left: 0' : 'right: 0')};

  &:hover {
    opacity: 0.7;
  }
`
