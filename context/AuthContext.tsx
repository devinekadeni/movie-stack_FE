import { createContext, useReducer } from 'react'

export type Genre = { id: string; name: string }

type AuthType = 'sign-in' | 'sign-up'

interface User {
  id: string
  name: string
  email: string
}

interface State {
  isOpen?: boolean
  authType: AuthType
  isLoggedIn: boolean
  user: User
}

type Action =
  | { type: 'OPEN_SIGN_IN'; payload: boolean }
  | { type: 'OPEN_SIGN_UP'; payload: boolean }
  | { type: 'SET_USER_SESSION'; payload: { isLoggedIn: boolean; user: User | null } }

type ContextState = [State, (state: Action) => void]

const initialState = {
  isOpen: false,
  authType: 'sign-in' as AuthType,
  isLoggedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
  },
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN_SIGN_IN':
      return { ...state, isOpen: action.payload, authType: 'sign-in' }
    case 'OPEN_SIGN_UP':
      return { ...state, isOpen: action.payload, authType: 'sign-up' }
    case 'SET_USER_SESSION':
      return {
        ...state,
        user: {
          id: action.payload.user?.id || '',
          name: action.payload.user?.name || '',
          email: action.payload.user?.email || '',
        },
        isLoggedIn: action.payload.isLoggedIn,
      }
    default:
      return { ...state }
  }
}

export const AuthContext = createContext<ContextState>([initialState, () => null])

export const AuthContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
