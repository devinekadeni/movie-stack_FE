import { createContext, useState } from 'react'

type ContextState = [boolean, (state: boolean) => void]

const initialValue = true

export const MuteContext = createContext<ContextState>([initialValue, () => null])

export const MuteContextProvider: React.FC = (props) => {
  const [isMute, setIsMute] = useState(initialValue)
  return (
    <MuteContext.Provider value={[isMute, setIsMute]}>
      {props.children}
    </MuteContext.Provider>
  )
}

export default MuteContextProvider
