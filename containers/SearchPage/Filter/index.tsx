import { useState, useContext, useEffect } from 'react'
import Slider from '@material-ui/core/Slider'

import { MovieContext, Genre } from '@/context/MovieContext'
import DatePicker from '@/components/DatePicker'

import Field from '../localComponents/Field'
import MovieType from './MovieType'

import { movieTypeMapping, next4Month } from '../helper'

import { Wrapper, Heading, FilterSection, DateWrapper, GenreList, Chip } from './styles'

type Filter = {
  releaseDateStart?: string
  releaseDateEnd?: string
  withGenres?: string
  ratingStart?: number
  ratingEnd?: number
}
interface Props {
  onReset: () => void
  onChangeFilter: (filter: Filter) => void
}

const Filter: React.FC<Props> = ({ onReset, onChangeFilter = () => {} }) => {
  const [movieData] = useContext(MovieContext)
  const { genreList } = movieData
  const [rating, setRating] = useState([0, 100])
  const [releaseDateStart, setReleaseDateStart] = useState('')
  const [releaseDateEnd, setReleaseDateEnd] = useState(next4Month)
  const [selectedGenreIds, setSelectedGenreIds] = useState<string[]>([])

  useEffect(() => {
    const filterPayload = {
      releaseDateStart,
      releaseDateEnd,
      withGenres: selectedGenreIds.join('|'),
      ratingStart: rating[0],
      ratingEnd: rating[1],
    }

    onChangeFilter(filterPayload)
  }, [rating, releaseDateStart, releaseDateEnd, selectedGenreIds])

  const handleChangeGenre = (genre: Genre) => {
    let newValue = [...selectedGenreIds]

    if (selectedGenreIds.includes(genre.id)) {
      newValue = selectedGenreIds.filter((genreId) => genreId !== genre.id)
    } else {
      newValue.push(genre.id)
    }

    setSelectedGenreIds(newValue)
  }

  return (
    <Wrapper>
      <Heading>
        <h5>Filter</h5>
        <button onClick={onReset}>RESET</button>
      </Heading>
      <FilterSection>
        <Field title="Movies">
          <MovieType
            onChange={(movieType: 'ALL' | 'UPCOMING' | 'NOW_PLAYING' | 'TOP_RATED') => {
              const {
                releaseDateStart,
                releaseDateEnd,
                ratingStart,
                ratingEnd,
              } = movieTypeMapping[movieType]

              setReleaseDateStart(releaseDateStart)
              setReleaseDateEnd(releaseDateEnd)
              setRating([ratingStart, ratingEnd])
              setSelectedGenreIds([])
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
                    handleChangeGenre(genre)
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
