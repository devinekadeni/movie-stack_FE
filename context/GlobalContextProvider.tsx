import { AuthContextProvider } from '@/context/AuthContext'
import { MuteContextProvider } from '@/context/MuteContext'
import { MovieContextProvider } from '@/context/MovieContext'
import { ApolloContextProvider } from './ApolloContext'

const GlobalContextProvider: React.FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <ApolloContextProvider>
        <MuteContextProvider>
          <MovieContextProvider>{children}</MovieContextProvider>
        </MuteContextProvider>
      </ApolloContextProvider>
    </AuthContextProvider>
  )
}

export default GlobalContextProvider
