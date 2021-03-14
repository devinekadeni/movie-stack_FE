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
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),
})

interface FormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const { handleSubmit, register, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    // TODO: submit to API sign in
  }

  return (
    <Dialog open={true} fullWidth maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle disableTypography>
          <h3>Sign In</h3>
          <IconButton>
            <CloseIcon size="24" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button>Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default SignIn
