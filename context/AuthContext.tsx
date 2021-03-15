import { createContext, useReducer } from 'react'

export type Genre = { id: string; name: string }

type AuthType = 'sign-in' | 'sign-up'

interface State {
  isOpen?: boolean
  authType: AuthType
}

type Action = { type: 'OPEN_SIGN_IN' | 'OPEN_SIGN_UP'; payload: boolean }

type ContextState = [State, (state: Action) => void]

const initialState = {
  isOpen: false,
  authType: 'sign-in' as AuthType,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN_SIGN_IN':
      return { isOpen: action.payload, authType: 'sign-in' }
    case 'OPEN_SIGN_UP':
      return { isOpen: action.payload, authType: 'sign-up' }
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
