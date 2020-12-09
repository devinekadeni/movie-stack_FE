import React, { useRef } from 'react'
import { useQuery } from '@apollo/client'
import LazyLoad from 'react-lazyload'

import * as queries from '../../queries.graphql'

import MovieCard from '@/components/MovieCard'
import MovieCardLoader from '@/components/MovieCard/Loader'
import MovieShowCaseLoader from './Loader'
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle'
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle'

import {
  Wrapper,
  CategoryWrapper,
  Line,
  ScrollButtonWrapper,
  MovieListWrapper,
} from './styles'

interface Movie {
  id: string
  poster: string
  rating: number
  title: string
  genres: string[]
  releaseDate: string
  summary: string
}

interface Genre {
  id: string
  name: string
}

interface Props {
  categoryTitle: string
  className?: string
  movieType: string
}

const MovieShowCase: React.FC<Props> = ({ categoryTitle, className, movieType }) => {
  const scrollContainer = useRef(null)
  const MovieList = useQuery(queries.MovieList, {
    variables: { page: 1, movieType },
  })

  const GenreList = useQuery(queries.GenreList, {
    variables: { page: 1, movieType },
  })

  const isFetching = MovieList.loading || GenreList.loading
  const isErrorFetching = MovieList.error || GenreList.error

  if (isErrorFetching) {
    return <div>Oops Something wrong</div>
  }

  const { movies }: { movies: Movie[] } = MovieList?.data?.movieList || {}
  const { genreList }: { genreList: Genre[] } = GenreList?.data || {}

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
          movies.map((movie, i) => {
            const genres = movie.genres.map((genreId) => {
              return genreList.find((val) => val.id === genreId)?.name || ''
            })
            return (
              <LazyLoad key={movie.id} placeholder={<MovieCardLoader />} overflow={i > 3}>
                <MovieCard
                  poster={movie.poster}
                  rating={movie.rating}
                  title={movie.title}
                  genres={genres}
                />
              </LazyLoad>
            )
          })
        )}
      </MovieListWrapper>
    </Wrapper>
  )
}

export default MovieShowCase
