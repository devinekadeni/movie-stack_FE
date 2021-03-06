import { useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import * as queries from '../../queries.graphql'
import { MovieContext } from '@/context/MovieContext'

import MovieCard from '@/components/MovieCard'
import MovieShowCaseLoader from './Loader'
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle'
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle'

import {
  Wrapper,
  CategoryWrapper,
  Line,
  ScrollButtonWrapper,
  MovieListWrapper,
  MovieCardWrapper,
} from './styles'
import { titleEncoder } from '@/helpers/formatter'

export interface Movie {
  id: string
  poster: string
  rating: number
  title: string
  genreIds: string[]
  releaseDate: string
  summary: string
}

interface Props {
  categoryTitle: string
  className?: string
  movieType: string
}

const MovieShowCase: React.FC<Props> = ({ categoryTitle, className, movieType }) => {
  const router = useRouter()
  const MovieList = useQuery(queries.MovieList, {
    variables: { page: 1, movieType },
  })
  const scrollContainer = useRef(null)
  const [movieData] = useContext(MovieContext)
  const { genreList } = movieData

  const isFetching = MovieList.loading
  const isErrorFetching = MovieList.error

  if (isErrorFetching) {
    return <div>Oops Something wrong</div>
  }

  const { movies }: { movies: Movie[] } = MovieList?.data?.movieList || {}

  return (
    <Wrapper className={className}>
      <CategoryWrapper>
        <h2>{categoryTitle}</h2>
        <Line />
        <ScrollButtonWrapper>
          <span>
            <ArrowLeftCircle size="32" />
          </span>
          <span>
            <ArrowRightCircle size="32" />
          </span>
        </ScrollButtonWrapper>
      </CategoryWrapper>
      <MovieListWrapper itemCount={movies?.length || 4} ref={scrollContainer}>
        {isFetching ? (
          <MovieShowCaseLoader />
        ) : (
          movies.map((movie) => {
            const genres = movie.genreIds.map((genreId) => {
              return genreList.find((val) => val.id === genreId)?.name || ''
            })
            const { protocol, host } = window.location
            const sharedUrl = `${protocol}//${host}/movie/${titleEncoder(movie.title)}_${
              movie.id
            }`

            return (
              <MovieCardWrapper
                key={movie.id}
                onClick={() => {
                  router.push(`/movie/${titleEncoder(movie.title)}_${movie.id}`)
                }}
              >
                <MovieCard
                  size="w185"
                  posterUrl={movie.poster}
                  rating={movie.rating}
                  title={movie.title}
                  genres={genres.slice(0, 4)}
                  url={sharedUrl}
                />
              </MovieCardWrapper>
            )
          })
        )}
      </MovieListWrapper>
    </Wrapper>
  )
}

export default MovieShowCase
