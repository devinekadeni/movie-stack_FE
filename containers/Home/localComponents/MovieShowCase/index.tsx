import React, { useRef } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import GLOBAL from '@/config/global'

import * as queries from '../../queries.graphql'

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
} from './styles'
import { titleEncoder } from '@/helpers/formatter'

interface Movie {
  id: string
  poster: string
  rating: number
  title: string
  genreIds: string[]
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
          movies.map((movie) => {
            const genres = movie.genreIds.map((genreId) => {
              return genreList.find((val) => val.id === genreId)?.name || ''
            })

            return (
              <Link
                key={movie.id}
                href={`/movie/${titleEncoder(movie.title)}_${movie.id}`}
              >
                <a>
                  <MovieCard
                    posterUrl={`${GLOBAL.imageBaseURL}/w185${movie.poster}`}
                    rating={movie.rating}
                    title={movie.title}
                    genres={genres.slice(0, 4)}
                  />
                </a>
              </Link>
            )
          })
        )}
      </MovieListWrapper>
    </Wrapper>
  )
}

export default MovieShowCase
