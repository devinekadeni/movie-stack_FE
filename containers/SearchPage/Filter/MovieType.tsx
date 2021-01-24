import React, { useState } from 'react'
import styled from 'styled-components'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabelMUI from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const Legend = styled(FormLabel).attrs({ component: 'legend' })`
  && {
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    color: #212121 !important;
    margin-bottom: 8px;
  }
`

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

const MovieType: React.FC<Props> = ({ onChange }) => {
  const [movieType, setMovieType] = useState<MovieType>('ALL')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMovieType = e.target.value as MovieType

    setMovieType(newMovieType)
    onChange(newMovieType)
  }

  return (
    <FormControl component="fieldset" fullWidth>
      <Legend>Movies</Legend>
      <RadioGroup
        aria-label="movie_type"
        name="movie_type"
        value={movieType}
        onChange={handleOnChange}
      >
        <FormControlLabel
          value="ALL"
          control={<Radio color="primary" />}
          label="All Movies"
          labelPlacement="start"
        />
        <FormControlLabel
          value="UPCOMING"
          control={<Radio color="primary" />}
          label="Upcoming Movies"
          labelPlacement="start"
        />
        <FormControlLabel
          value="NOW_PLAYING"
          control={<Radio color="primary" />}
          label="Now Playing"
          labelPlacement="start"
        />
        <FormControlLabel
          value="TOP_RATED"
          control={<Radio color="primary" />}
          label="Top Rated"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  )
}

export default MovieType
