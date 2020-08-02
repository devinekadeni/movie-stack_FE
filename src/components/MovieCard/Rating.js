import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { RatingWrapper } from './styles'
const Rating = ({ className, ratingValue }) => {
  return (
    <RatingWrapper className={className}>
      {/* backdrop progress */}
      <CircularProgress
        style={{ color: '#9AEDCA', position: 'absolute' }}
        variant="static"
        value={100}
        size="2.8rem"
      />
      <CircularProgress
        color="primary"
        variant="static"
        value={ratingValue * 10}
        size="2.8rem"
      />
      <span>{ratingValue}</span>
    </RatingWrapper>
  )
}

export default Rating
