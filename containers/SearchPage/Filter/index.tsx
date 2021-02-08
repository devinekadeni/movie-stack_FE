import { useContext } from 'react'
import Slider from '@material-ui/core/Slider'

import { MovieContext, Genre } from '@/context/MovieContext'
import DatePicker from '@/components/DatePicker'

import Field from '../localComponents/Field'
import MovieType from './MovieType'

import { movieTypeMapping } from '../helper'

import { Wrapper, Heading, FilterSection, DateWrapper, GenreList, Chip } from './styles'

type Filter = {
  releaseDateStart: string
  releaseDateEnd: string
  withGenres: string
  ratingStart: number
  ratingEnd: number
}
interface Props {
  onReset: () => void
  onChangeFilter: (filter: Filter) => void
  filterValue: {
    releaseDateStart: string
    releaseDateEnd: string
    withGenres: string
    ratingStart: number
    ratingEnd: number
  }
}

const Filter: React.FC<Props> = ({ onReset, onChangeFilter = () => {}, filterValue }) => {
  const [movieData] = useContext(MovieContext)
  const { genreList } = movieData
  const selectedGenreIds = filterValue.withGenres ? filterValue.withGenres.split('|') : []

  const handleChangeGenre = (genre: Genre) => {
    let newValue = [...selectedGenreIds]

    if (selectedGenreIds.includes(genre.id)) {
      newValue = selectedGenreIds.filter((genreId) => genreId !== genre.id)
    } else {
      newValue.push(genre.id)
    }

    onChangeFilter({ ...filterValue, withGenres: newValue.join('|') })
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

              onChangeFilter({
                releaseDateStart,
                releaseDateEnd,
                ratingStart,
                ratingEnd,
                withGenres: '',
              })
            }}
          />
        </Field>

        <Field title="Rating">
          <Slider
            value={[filterValue.ratingStart * 10, filterValue.ratingEnd * 10]}
            onChange={(_, rangeValue) => {
              const [ratingStart, ratingEnd] = rangeValue as number[]

              onChangeFilter({
                ...filterValue,
                ratingStart: ratingStart / 10,
                ratingEnd: ratingEnd / 10,
              })
            }}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </Field>

        <Field title="Release Date">
          <DateWrapper>
            <DatePicker
              label="From Year"
              value={filterValue.releaseDateStart}
              onChange={(e) => {
                onChangeFilter({ ...filterValue, releaseDateStart: e.target.value })
              }}
            />
            <DatePicker
              label="To Year"
              value={filterValue.releaseDateEnd}
              onChange={(e) => {
                onChangeFilter({ ...filterValue, releaseDateEnd: e.target.value })
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
