import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import dynamic from 'next/dynamic'
const SignIn = dynamic(() => import('./SignIn'))
const SignUp = dynamic(() => import('./SignUp'))

const Authentication: React.FC = () => {
  // handle server side
  if (typeof window === 'undefined') {
    return null
  }

  const [{ isOpen = false, authType }, dispatch] = useContext(AuthContext)

  const handleClose = (type: 'OPEN_SIGN_IN' | 'OPEN_SIGN_UP', open: boolean) => {
    dispatch({ type, payload: open })
  }

  const renderAuthDialog = {
    ['sign-in']: (
      <SignIn isOpen={isOpen} onClose={() => handleClose('OPEN_SIGN_IN', false)} />
    ),
    ['sign-up']: (
      <SignUp isOpen={isOpen} onClose={() => handleClose('OPEN_SIGN_UP', false)} />
    ),
  }

  return renderAuthDialog[authType]
}

export default Authentication
