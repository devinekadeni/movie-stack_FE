import { AuthContextProvider } from '@/context/AuthContext'
import { MuteContextProvider } from '@/context/MuteContext'
import { MovieContextProvider } from '@/context/MovieContext'

const GlobalContextProvider: React.FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <MuteContextProvider>
        <MovieContextProvider>{children}</MovieContextProvider>
      </MuteContextProvider>
    </AuthContextProvider>
  )
}

export default GlobalContextProvider
