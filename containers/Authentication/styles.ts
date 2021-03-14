import styled from 'styled-components'
import DialogTitleMUI from '@material-ui/core/DialogTitle'
import DialogContentMUI from '@material-ui/core/DialogContent'
import DialogActionsMUI from '@material-ui/core/DialogActions'
import TextFieldMUI from '@material-ui/core/TextField'
import ButtonMUI from '@material-ui/core/Button'
import IconButtonMUI from '@material-ui/core/IconButton'
import { Eye } from '@styled-icons/bootstrap/Eye'
import { EyeSlash } from '@styled-icons/bootstrap/EyeSlash'
import { BASIC_COLOR } from '@/styles/_colors'

export const DialogTitle = styled(DialogTitleMUI)`
  && {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      margin: 0;
    }
  }
`

export const IconButton = styled(IconButtonMUI)`
  && {
    position: absolute;
    right: 8px;
  }
`

export const DialogContent = styled(DialogContentMUI)`
  && {
    padding: 30px 24px;
    display: grid;
    row-gap: 28px;
  }
`

export const DialogActions = styled(DialogActionsMUI)`
  && {
    padding: 24px;
  }
`

export const TextField = styled(TextFieldMUI).attrs({
  variant: 'outlined',
})`
  && {
    & > div:first-of-type {
      border-radius: 12px;
    }

    label {
      font-size: 1.4rem;
    }
  }
`

export const Button = styled(ButtonMUI).attrs({
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
  type: 'submit',
})`
  && {
    text-transform: initial;
    border-radius: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`

export const VisibleOnIcon = styled(Eye).attrs({
  size: '1.8rem',
  color: BASIC_COLOR.mainGreen,
})`
  cursor: pointer;
`

export const VisibleOffIcon = styled(EyeSlash).attrs({
  size: '1.8rem',
})`
  cursor: pointer;
`
