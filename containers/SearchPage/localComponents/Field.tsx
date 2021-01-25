import React from 'react'
import styled from 'styled-components'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlMUI from '@material-ui/core/FormControl'

const Wrapper = styled(FormControlMUI).attrs({
  component: 'fieldset',
  fullWidth: true,
})`
  && {
    margin-bottom: 32px;
  }
`

const Legend = styled(FormLabel).attrs({ component: 'legend' })`
  && {
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    color: #212121 !important;
    margin-bottom: 8px;
  }
`

interface Props {
  title: string
  children: React.ReactNode
}

const Field: React.FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <Legend>{title}</Legend>
      {children}
    </Wrapper>
  )
}

export default Field
