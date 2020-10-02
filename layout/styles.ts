import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding-top: ${(props: { headerHeight: number }) => props.headerHeight}px;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  transition: box-shadow 0.3s;
  ${(props: { isScrolled: boolean }) =>
    props.isScrolled && `box-shadow: 0px 3px 14px 1px rgba(189, 189, 189, 1)`};
`
