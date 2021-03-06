import { useState, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Dialog from '@material-ui/core/Dialog'
import InputAdornment from '@material-ui/core/InputAdornment'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import { AuthContext } from '@/context/AuthContext'
import API from '@/helpers/ApiHandler'

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
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),
})

interface FormData {
  email: string
  password: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
}

const SignIn: React.FC<Props> = ({ isOpen, onClose }) => {
  const [, dispatch] = useContext(AuthContext)
  const { handleSubmit, formState, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const onSubmit = async (formData: FormData) => {
    try {
      const result = await API.call({
        method: 'POST',
        url: '/user/signin',
        data: {
          email: formData.email,
          password: formData.password,
        },
      })

      const { data, status } = result.data

      if (status === 'success') {
        API.login(data.access_token, data.access_token_expiry_UTC)

        const userData = {
          email: data.email,
          name: data.name,
          id: data.user_id,
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
          <h3>Sign In</h3>
          <IconButton onClick={onClose}>
            <CloseIcon size="24" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }: any) => (
              <TextField
                label="Email Address"
                type="email"
                placeholder="Input your email"
                value={field.value}
                onChange={field.onChange}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }: any) => (
              <TextField
                label="Password"
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Input your password"
                value={field.value}
                onChange={field.onChange}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
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
            )}
          />
        </DialogContent>
        <DialogActions $hasErrorMessage={!!errorMessage}>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button disabled={formState.isSubmitting} type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default SignIn
