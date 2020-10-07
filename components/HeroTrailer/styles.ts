import styled from 'styled-components'
import MuiButton from '@material-ui/core/Button'
import { SCREEN } from '@/styles/mediaBreakPoint'

export const LayerInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.2) 65%,
    rgba(0, 0, 0, 0.1) 100%
  );
  opacity: 0;
  color: white;
  padding-left: 50px;
  transition: opacity 0.3s;

  & > h1 {
    max-width: 50%;
    font-size: 4.8rem;
    line-height: 5.8rem;
    margin: 0 0 24px;

    @media screen and (max-width: ${SCREEN.desktop}) {
      font-size: 3.2rem;
      line-height: 4.4rem;
      margin: 0 0 18px;
    }
  }

  & > p {
    max-width: 50%;
    font-size: 1.6rem;
    line-height: 3rem;
    margin: 0 0 32px;

    @media screen and (max-width: ${SCREEN.desktop}) {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
`

export const Wrapper = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  white-space: initial;

  &:hover {
    ${LayerInfo} {
      opacity: 1;
    }
  }
`

export const ScreenBlocker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ActionWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: max-content max-content;
  column-gap: 16px;
`

const outlinedStyle = `
  border:1px solid white;
  color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`

const containedStyle = `
  border: 1px solid white;
  color: #212121;
  background-color: white;

  &:hover {
    background-color: lightgray;
  }
`

const variant: { outlined?: string; contained?: string } = {
  outlined: outlinedStyle,
  contained: containedStyle,
}

export const Button = styled(MuiButton)`
  && {
    border-radius: 16px;
    padding: 8px 47px;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.6rem;
    line-height: 2.4rem;
    transition: background-color 0.3s;

    @media screen and (max-width: ${SCREEN.desktop}) {
      padding: 8px 28px;
      font-size: 1.2rem;
    }

    ${(props) =>
      props.variant === 'contained' || props.variant === 'outlined'
        ? variant[props.variant]
        : ''}
  }
`

export const MuteButton = styled.span`
  position: absolute;
  right: 100px;
  bottom: 150px;
  width: 45px;
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  border: 1px solid white;
  transition: background-color 0.3s;

  @media screen and (max-width: ${SCREEN.desktop}) {
    width: 36px;
    padding: 6px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`
