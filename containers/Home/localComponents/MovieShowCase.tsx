import React from 'react'
import styled from 'styled-components'
import { BASIC_COLOR } from '@/styles/_colors'
import MovieCard from '@/components/MovieCard'
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle'
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle'

const Wrapper = styled.div`
  font-size: 1.6rem;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 12fr;
  column-gap: 30px;
  margin-bottom: 72px;
`

const CategoryWrapper = styled.div`
  & > h2 {
    white-space: pre-line;
    font-weight: bold;
    font-size: 38px;
    line-height: 44px;
    text-transform: uppercase;
    margin: 0 0 24px;
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

const MovieList = styled.div`
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
  movieTitle: string
  genre: string[]
}

interface Props {
  categoryTitle: string
  movieList: Movie[]
}

const MovieShowCase: React.FC<Props> = ({ categoryTitle, movieList }) => {
  return (
    <Wrapper>
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
      <MovieList itemCount={movieList.length}>
        {movieList.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              poster={movie.poster}
              rating={movie.rating}
              movieTitle={movie.movieTitle}
              genre={movie.genre}
            />
          )
        })}
      </MovieList>
    </Wrapper>
  )
}

export default MovieShowCase
