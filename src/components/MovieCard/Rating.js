import React from 'react'

import { RatingWrapper, BackdropCircular, RatingCircular } from './styles'
const Rating = ({ className, ratingValue }) => {
  return (
    <RatingWrapper className={className}>
      <BackdropCircular />
      <RatingCircular />
      <span>{ratingValue}</span>
    </RatingWrapper>
  )
}

export default Rating
