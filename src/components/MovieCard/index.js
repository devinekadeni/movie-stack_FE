import React from 'react'

import Poster from './Poster'
import { MovieCardWrapper, Description } from './styles'

const MovieCard = ({ title, rating, poster, genres }) => {
  const text =
    genres.length < 5 ? genres.join(', ') : genres.slice(0, 4).join(', ') + '...'

  return (
    <MovieCardWrapper>
      <Poster rating={rating} poster={poster} />
      <Description>
        <h3>{title}</h3>
        <span>{text}</span>
      </Description>
    </MovieCardWrapper>
  )
}

export default MovieCard
