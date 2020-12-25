import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr 2fr;
  max-width: 1600px;
  margin: auto;
`

export const PosterSection = styled.section``

export const SummarySection = styled.section`
  background-color: #f8fafc;
  padding: 48px;
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

export const MediaSection = styled.section``
