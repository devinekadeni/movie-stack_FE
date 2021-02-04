import { useState, useContext } from 'react'
import Slider from '@material-ui/core/Slider'

import { MovieContext } from '@/context/MovieContext'
import DatePicker from '@/components/DatePicker'

import Field from '../localComponents/Field'
import MovieType from './MovieType'

import { Wrapper, Heading, FilterSection, DateWrapper, GenreList, Chip } from './styles'

interface Props {
  onReset: () => void
}

const Filter: React.FC<Props> = ({ onReset }) => {
  const [movieData] = useContext(MovieContext)
  const { genreList } = movieData

  const [rating, setRating] = useState([0, 100])
  const [releaseDateStart, setReleaseDateStart] = useState('')
  const [releaseDateEnd, setReleaseDateEnd] = useState('')
  const [selectedGenreIds, setSelectedGenreIds] = useState<string[]>([])

  return (
    <Wrapper>
      <Heading>
        <h5>Filter</h5>
        <button onClick={onReset}>RESET</button>
      </Heading>
      <FilterSection>
        <Field title="Movies">
          <MovieType
            onChange={(value) => {
              console.log(value)
            }}
          />
        </Field>
        <Field title="Rating">
          <Slider
            value={rating}
            onChange={(_, rangeValue) => {
              setRating(rangeValue as number[])
            }}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </Field>
        <Field title="Release Date">
          <DateWrapper>
            <DatePicker
              label="From Year"
              value={releaseDateStart}
              onChange={(e) => {
                setReleaseDateStart(e.target.value)
              }}
            />
            <DatePicker
              label="To Year"
              value={releaseDateEnd}
              onChange={(e) => {
                setReleaseDateEnd(e.target.value)
              }}
            />
          </DateWrapper>
        </Field>
        <Field title="Genre">
          <div>Genre</div>
          <GenreList>
            {genreList.map((genre) => {
              return (
                <Chip
                  onClick={() => {
                    let newValue = [...selectedGenreIds]
                    if (selectedGenreIds.includes(genre.id)) {
                      newValue = selectedGenreIds.filter(
                        (genreId) => genreId !== genre.id
                      )
                    } else {
                      newValue.push(genre.id)
                    }
                    setSelectedGenreIds(newValue)
                  }}
                  $isSelected={selectedGenreIds.includes(genre.id)}
                  key={genre.id}
                  label={genre.name}
                  clickable
                  color="primary"
                  variant="outlined"
                />
              )
            })}
          </GenreList>
        </Field>
      </FilterSection>
    </Wrapper>
  )
}

export default Filter
