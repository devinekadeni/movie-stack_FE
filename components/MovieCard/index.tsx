import styled from 'styled-components'
import Poster from './Poster'
import Rating from './Rating'
import { SCREEN } from '@/styles/mediaBreakPoint'

const Wrapper = styled.div`
  position: relative;
  max-width: 200px;

  & > div:first-child {
    position: relative;
  }
`

const MovieTitle = styled.h5`
  font-size: 1em;
  color: #212121;
  margin: 8px 0 4px;
`

const Genre = styled.span`
  font-size: 0.875em;
  color: #838994;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (min-width: ${SCREEN.tablet}) {
    -webkit-line-clamp: 3;
  }
`

interface Props {
  poster: string
  rating: number
  movieTitle: string
  genre: string[]
}

const MovieCard: React.FC<Props> = ({ poster, rating, movieTitle, genre }) => {
  return (
    <Wrapper>
      <div>
        <Poster src={poster} alt="poster image" />
        <Rating rating={rating} />
      </div>
      <MovieTitle>{movieTitle}</MovieTitle>
      <Genre>{genre.join(', ')}</Genre>
    </Wrapper>
  )
}

export default MovieCard