import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import * as queries from '../queries.graphql'

import { BASIC_COLOR } from '@/styles/_colors'
import MovieCard from '@/components/MovieCard'
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle'
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle'
import { SCREEN } from '@/styles/mediaBreakPoint'

const Wrapper = styled.div`
  font-size: 1.6rem;
  max-width: 90vw;
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 12fr;
  column-gap: 30px;
`

const CategoryWrapper = styled.div`
  & > h2 {
    white-space: pre-line;
    font-weight: bold;
    font-size: 3.8rem;
    line-height: 4.4rem;
    text-transform: uppercase;
    margin: 0 0 24px;

    @media screen and (max-width: ${SCREEN.desktop}) {
      font-size: 2.8rem;
      line-height: 3rem;
    }
  }
`

const Line = styled.div`
  width: 72px;
  height: 8px;
  background-color: ${BASIC_COLOR.primaryColor};
`

const ScrollButtonWrapper = styled.div`
  margin-top: 120px;
  display: inline-grid;
  grid-template-columns: auto auto;
  column-gap: 12px;

  & > span {
    cursor: pointer;
    color: #e4eaf3;
    transition: color 0.3s;

    &:hover {
      color: ${BASIC_COLOR.primaryColor};
    }
  }
`

const MovieListWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ itemCount }: { itemCount: number }) =>
    `repeat(${itemCount}, 20%)`};
  column-gap: 5%;
  overflow-x: scroll;
`

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
  const MovieList = useQuery(queries.MovieList, {
    variables: { page: 1, movieType },
  })

  const GenreList = useQuery(queries.GenreList, {
    variables: { page: 1, movieType },
  })

  if (MovieList.loading || GenreList.loading) {
    return <div>Loading...</div>
  }

  if (MovieList.error || GenreList.error) {
    return <div>Oops Something wrong</div>
  }

  const { movies }: { movies: Movie[] } = MovieList.data.movieList
  const { genreList }: { genreList: Genre[] } = GenreList.data

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
      <MovieListWrapper itemCount={movies.length}>
        {movies.map((movie) => {
          const genres = movie.genres.map((genreId) => {
            return genreList.find((val) => val.id === genreId)?.name || ''
          })
          return (
            <MovieCard
              key={movie.id}
              poster={movie.poster}
              rating={movie.rating}
              title={movie.title}
              genres={genres}
            />
          )
        })}
      </MovieListWrapper>
    </Wrapper>
  )
}

export default MovieShowCase
