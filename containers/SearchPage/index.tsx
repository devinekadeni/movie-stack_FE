import { useState, useEffect, useRef, useContext } from 'react'
import { useQuery } from '@apollo/client'

import DropDown from '@/components/DropDown'
import DropDownMenu from '@/components/DropDown/Menu'
import MovieCard from '@/components/MovieCard'

import { MovieContext } from '@/context/MovieContext'
import * as queries from './queries.graphql'
import Filter from './Filter'
import MovieListLoader from './localComponents/MovieListLoader'
import { SORT_ITEMS, next4Month } from './helper'
import { Movie } from '@/containers/Home/localComponents/MovieShowCase'
import useInfiniteScroll from '@/helpers/hooks/useInfiniteScroll'
import {
  Wrapper,
  HeaderSide,
  ChevronDownIcon,
  ContentSide,
  MovieListSection,
  MovieList,
} from './styles'

const INITIAL_FILTER = {
  releaseDateStart: '',
  releaseDateEnd: next4Month,
  withGenres: '',
  ratingStart: 0,
  ratingEnd: 100,
}

const SearchPage: React.FC = () => {
  const [sortValue, setSortValue] = useState(SORT_ITEMS[0].value)
  const [movieHeight, setMovieHeight] = useState<number | null>(null)
  const [filterValue, setFilterValue] = useState(INITIAL_FILTER)
  const movieRef = useRef<null | HTMLElement>(null)
  const [{ genreList }] = useContext(MovieContext)

  const { data, loading, fetchMore } = useQuery(queries.SearchMovies, {
    variables: {
      page: 1,
      searchParams: {
        filter: filterValue,
        sortBy: sortValue,
      },
    },
  })

  const movieList: Movie[] = data?.searchMovies?.movies || []

  useEffect(() => {
    if (movieRef.current) {
      movieRef.current.addEventListener('scroll', loadMoreMovies)

      const viewportHeight = window.innerHeight
      const { top } = movieRef.current?.getBoundingClientRect()

      const positionHeight = 2 * (viewportHeight - top)
      setMovieHeight(positionHeight)
    }

    return () => {
      window.removeEventListener('scroll', loadMoreMovies)
    }
  }, [])

  useEffect(() => {
    movieRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [filterValue])

  const loadMoreMovies = () => {
    if (data) {
      const { currentPage, hasMore } = data.searchMovies

      if (hasMore) {
        fetchMore({
          variables: {
            page: currentPage + 1,
            searchParams: {
              filter: filterValue,
              sortBy: sortValue,
            },
          },
        }).then(() => {
          setIsFetching(false)
        })
      }
    } else if (isFetching && !data?.searchMovies?.hasMore) {
      setIsFetching(false)
    }
  }

  const [isFetching, setIsFetching] = useInfiniteScroll(loadMoreMovies, movieRef.current)

  return (
    <Wrapper>
      <HeaderSide>
        <h1>MOVIES</h1>
        <DropDown
          variant="outlined"
          label="Sort by"
          value={sortValue}
          onChange={(e) => {
            setSortValue(e.target.value as string)
          }}
          IconComponent={() => <ChevronDownIcon />}
        >
          {SORT_ITEMS.map((sortItem) => (
            <DropDownMenu key={sortItem.value} value={sortItem.value}>
              {sortItem.name}
            </DropDownMenu>
          ))}
        </DropDown>
      </HeaderSide>

      <ContentSide>
        <section>
          <Filter
            filterValue={filterValue}
            onReset={() => {
              setFilterValue(INITIAL_FILTER)
            }}
            onChangeFilter={setFilterValue}
          />
        </section>
        <MovieListSection $movieHeight={movieHeight} ref={movieRef}>
          <MovieList>
            {loading ? (
              <MovieListLoader />
            ) : (
              movieList.map((movie) => {
                const genres = movie.genreIds.map((genreId) => {
                  return genreList.find((val) => val.id === genreId)?.name || ''
                })
                return (
                  <MovieCard
                    key={movie.id}
                    size="w185"
                    posterUrl={movie.poster}
                    rating={movie.rating}
                    title={movie.title}
                    genres={genres.slice(0, 4)}
                  />
                )
              })
            )}
          </MovieList>
        </MovieListSection>
      </ContentSide>
    </Wrapper>
  )
}

export default SearchPage
