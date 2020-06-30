import React from 'react'
import styled from 'styled-components'

import Rating from './Rating'
import { MovieCardWrapper, Cover, Description } from './styles'

const StyledRating = styled(Rating)`
  position: absolute;
  right: 0;
  bottom: 0;
`

const MovieCard = ({ title, rating, poster, genres }) => {
  const text =
    genres.length < 5 ? genres.join(', ') : genres.slice(0, 4).join(', ') + '...'

  return (
    <MovieCardWrapper>
      <Cover>
        <img src={poster} alt="movie_card" />
        <StyledRating ratingValue={rating} />
      </Cover>
      <Description>
        <h3>{title}</h3>
        <span>{text}</span>
      </Description>
    </MovieCardWrapper>
  )
}

export default MovieCard
