import React, { useState } from 'react'
import styled from 'styled-components'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabelMUI from '@material-ui/core/FormControlLabel'

const FormControlLabel = styled(FormControlLabelMUI)`
  && {
    margin-left: 0;
    justify-content: space-between;

    span:nth-child(2) {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #212121;
    }
  }
`

type MovieType = 'ALL' | 'UPCOMING' | 'NOW_PLAYING' | 'TOP_RATED'

interface Props {
  onChange: (movieType: MovieType) => void
}

const OPTIONS = [
  {
    label: 'All Movies',
    value: 'ALL',
  },
  {
    label: 'Upcoming Movies',
    value: 'UPCOMING',
  },
  {
    label: 'Now Playing',
    value: 'NOW_PLAYING',
  },
  {
    label: 'Top Rated',
    value: 'TOP_RATED',
  },
]

const MovieType: React.FC<Props> = ({ onChange }) => {
  const [movieType, setMovieType] = useState<MovieType>(OPTIONS[0].value as MovieType)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMovieType = e.target.value as MovieType

    setMovieType(newMovieType)
    onChange(newMovieType)
  }

  return (
    <RadioGroup
      aria-label="movie_type"
      name="movie_type"
      value={movieType}
      onChange={handleOnChange}
    >
      {OPTIONS.map((option) => {
        return (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
            labelPlacement="start"
          />
        )
      })}
    </RadioGroup>
  )
}

export default MovieType
