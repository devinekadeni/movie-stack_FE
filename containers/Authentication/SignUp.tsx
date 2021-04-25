import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthContext } from '@/context/AuthContext'
import API from '@/helpers/ApiHandler'

import Dialog from '@material-ui/core/Dialog'
import InputAdornment from '@material-ui/core/InputAdornment'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import {
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  TextField,
  ErrorMessage,
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
  const { handleSubmit, register, errors, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const [, dispatch] = useContext(AuthContext)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const onSubmit = async (formData: FormData) => {
    try {
      const { data: resUser } = await API.call({
        method: 'POST',
        url: '/user/signup',
        data: {
          email: formData.email,
          password: formData.password,
          name: formData.name,
        },
      })

      if (resUser.status === 'success') {
        API.login(resUser.data.access_token)

        const userData = {
          email: resUser.data.email,
          name: resUser.data.name,
          id: resUser.data.user_id,
        }

        dispatch({
          type: 'SET_USER_SESSION',
          payload: {
            isLoggedIn: true,
            user: userData,
          },
        })

        onClose()
      }
    } catch (error) {
      const message = error?.response?.data?.error?.message || 'Oops something wrong'

      setErrorMessage(message)
    }
  }

  return (
    <Dialog open={isOpen} fullWidth maxWidth="xs" onClose={onClose}>
      <form
        onSubmit={(e) => {
          setErrorMessage('')
          handleSubmit(onSubmit)(e)
        }}
      >
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
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button disabled={formState.isSubmitting} type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default SignUp
