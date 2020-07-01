import React from 'react'
import styled from 'styled-components'

import Rating from './Rating'
import { PosterWrapper } from './styles'

const StyledRating = styled(Rating)`
  position: absolute;
  right: 0;
  bottom: 0;
`

const Poster = ({ poster, rating }) => {
  return (
    <PosterWrapper>
      <img src={poster} alt="movie_card" />
      <StyledRating ratingValue={rating} />
    </PosterWrapper>
  )
}

export default Poster
