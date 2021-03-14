import { useContext, useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import format from 'date-fns/format'

import InputAdornment from '@material-ui/core/InputAdornment'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'
import { MovieData } from '@/containers/MovieDetail'
import { MovieContext } from '@/context/MovieContext'
import GLOBAL from '@/config/global'
import { titleEncoder } from '@/helpers/formatter'
import useDebounce from '@/helpers/hooks/useDebounce'

import * as queries from './queries.graphql'
import ResultItem from './ResultItem'
import { Wrapper, StyledSearchIcon, Input, SearchResult } from './styles'

const SearchMovie: React.FC = () => {
  const router = useRouter()
  const [{ genreList }] = useContext(MovieContext)
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const debouncedSearchKeyword = useDebounce(searchKeyword, 500) as string

  const inputRef = useRef<HTMLInputElement>(null)

  const [getMovies, { data }] = useLazyQuery(queries.SearchMoviesByKeyword)

  const movieList: MovieData[] = data?.searchMoviesByKeyword?.movies || []

  useEffect(() => {
    const keyword = debouncedSearchKeyword
      ? encodeURIComponent(debouncedSearchKeyword)
      : ''

    getMovies({
      variables: {
        keyword,
      },
    })
  }, [debouncedSearchKeyword])

  const handleClearSearch = () => {
    setSearchKeyword('')
    setIsSearchMode(false)
  }

  const handleClickMovieCard = (movieTitle: string, movieId: string) => {
    router.push(`/movie/${titleEncoder(movieTitle)}_${movieId}`)
    handleClearSearch()
  }

  return (
    <Wrapper>
      <StyledSearchIcon
        $isHidden={isSearchMode}
        onClick={() => {
          setIsSearchMode(true)
          inputRef.current?.focus()
        }}
      />
      <Input
        $isHidden={!isSearchMode}
        inputRef={inputRef}
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onBlur={() => {
          if (!inputRef.current?.value) {
            setIsSearchMode(false)
          }
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon size="1.8rem" />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            {searchKeyword && (
              <CloseIcon
                size="1.8rem"
                style={{ cursor: 'pointer' }}
                onClick={handleClearSearch}
              />
            )}
          </InputAdornment>
        }
      />
      {!!movieList.length && (
        <SearchResult>
          {movieList.map((movie) => {
            const posterUrl = `${GLOBAL.imageBaseURL}/w45/${movie.poster}`
            const releaseDate = movie.releaseDate
              ? format(new Date(movie.releaseDate), 'MMMM yyyy')
              : '-'
            let genres: string[] = []

            if (movie.genreIds.length) {
              genres = movie.genreIds.map((genreId) => {
                return genreList.find((val) => val.id === genreId)?.name || ''
              })
            } else if (movie.genres.length) {
              genres = movie.genres.map((genre) => genre.name)
            }

            return (
              <ResultItem
                key={movie.id}
                imgUrl={posterUrl}
                title={movie.title}
                genres={genres}
                releaseDate={releaseDate}
                onClick={() => handleClickMovieCard(movie.title, movie.id)}
              />
            )
          })}
        </SearchResult>
      )}
    </Wrapper>
  )
}

export default SearchMovie
