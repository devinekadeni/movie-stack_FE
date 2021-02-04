import { createContext, useReducer, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

const GQL_GENRE_LIST = `query GenreList {
  genreList {
    id
    name
  }
}`

export type Genre = { id: string; name: string }

interface State {
  genreList: Genre[]
}

type Action = { type: 'GET_GENRE_LIST'; payload: Genre[] }

type ContextState = [State, (state: Action) => void]

const initialState = {
  genreList: [],
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'GET_GENRE_LIST':
      return { ...state, genreList: action.payload }
    default:
      return { ...state }
  }
}

export const MovieContext = createContext<ContextState>([initialState, () => null])

export const MovieContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { data } = useQuery(gql(GQL_GENRE_LIST))

  useEffect(() => {
    if (data) {
      dispatch({ type: 'GET_GENRE_LIST', payload: data.genreList })
    }
  }, [data])

  return (
    <MovieContext.Provider value={[state, dispatch]}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider
