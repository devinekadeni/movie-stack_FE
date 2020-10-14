import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'

export const HeroWrapper = styled.div`
  ${(props: { index: number }) => props.index === 0 && `padding-left: 20px`};
  padding-right: 20px;
`

export const StyledCarousel = styled(Carousel)`
  && {
    color: red;

    .slide {
      min-width: unset !important;
      background-color: transparent;
      text-align: initial;
    }

    .carousel .slide iframe {
      width: 100%;
      margin: 0;
      border: 0;
    }

    .control-dots {
    }
  }
`

export const IndicatorsWrapper = styled.div`
  position: absolute;
  top: 104%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const normalDotStyle = `
  width: 6px;
  height: 6px;
  background-color: black;
`

const selectedDotStyle = `
  width: 12px;
  height: 12px;
  border: 1px solid black;
`

export const Dot = styled.span`
  border-radius: 50%;
  margin: 0 8px;
  ${(props: { isSelected: boolean }) =>
    props.isSelected ? selectedDotStyle : normalDotStyle};
  cursor: pointer;
`
