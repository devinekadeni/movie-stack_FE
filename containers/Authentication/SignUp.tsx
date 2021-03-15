import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Dialog from '@material-ui/core/Dialog'
import InputAdornment from '@material-ui/core/InputAdornment'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import {
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  VisibleOnIcon,
  VisibleOffIcon,
} from './styles'

const schema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required').min(8, 'Minimum 8 character'),
  confirmPassword: yup
    .string()
    .required('Required')
    .equals([yup.ref('password')], 'Password must match'),
})

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
}

const SignUp: React.FC<Props> = ({ isOpen, onClose }) => {
  const { handleSubmit, register, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    // TODO: submit to API sign up
  }

  return (
    <Dialog open={isOpen} fullWidth maxWidth="xs" onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle disableTypography>
          <h3>Sign Up</h3>
          <IconButton onClick={onClose}>
            <CloseIcon size="24" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            inputRef={register}
            name="name"
            label="Name"
            type="text"
            placeholder="Input your name"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            inputRef={register}
            name="email"
            label="Email Address"
            type="email"
            placeholder="Input your email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            inputRef={register}
            name="password"
            label="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Input your password"
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {isPasswordVisible ? (
                    <VisibleOnIcon onClick={togglePasswordVisibility} />
                  ) : (
                    <VisibleOffIcon onClick={togglePasswordVisibility} />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            inputRef={register}
            name="confirmPassword"
            label="Confirm Password"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Re-input your password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {isPasswordVisible ? (
                    <VisibleOnIcon onClick={togglePasswordVisibility} />
                  ) : (
                    <VisibleOffIcon onClick={togglePasswordVisibility} />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button>Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default SignUp
