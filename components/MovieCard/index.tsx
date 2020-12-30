import styled from 'styled-components'
import Poster from './Poster'
import Rating from './Rating'
import { SCREEN } from '@/styles/mediaBreakPoint'

const Wrapper = styled.div`
  position: relative;
  max-width: 200px;

  & > div:first-child {
    position: relative;
    height: 300px;
  }
`

const MovieTitle = styled.h5`
  font-size: 1em;
  color: #212121;
  margin: 8px 0 4px;
`

const Genre = styled.span`
  font-family: Noto Sans;
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
  posterUrl: string
  rating: number
  title: string
  genres: string[]
  className?: string
}

const DEFAULT_POSTER =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

const MovieCard: React.FC<Props> = ({ posterUrl, rating, title, genres, className }) => {
  const posterImage = posterUrl || DEFAULT_POSTER

  return (
    <Wrapper className={className}>
      <div>
        <Poster src={posterImage} alt="poster image" />
        <Rating rating={rating} />
      </div>
      <MovieTitle>{title}</MovieTitle>
      {genres && <Genre>{genres.join(', ')}</Genre>}
    </Wrapper>
  )
}

export default MovieCard
