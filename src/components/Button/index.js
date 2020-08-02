import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const mapStyle = {
  primary: {
    variant: 'contained',
    color: 'primary',
  },
  secondary: {
    variant: 'outlined',
    color: 'primary',
  },
}

const StyledButton = styled(({ buttonVariant, ...props }) => (
  <Button {...mapStyle[buttonVariant]} {...props} />
))`
  && {
    border-radius: 16px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-transform: unset;
    ${(props) => props.buttonVariant === 'primary' && `color: #FFFFFF`};
  }
`

export default StyledButton
