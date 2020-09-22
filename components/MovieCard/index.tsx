import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const Wrapper = styled.div`
  position: relative;
  max-width: 200px;
`

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px 12px 48px 12px;
  border: 1px solid #f4f4f4;
`

const RatingWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: 3px solid #fff;

  > .progress-base {
    color: #a0ece4;
    position: absolute;
  }
`

const Rating = styled.span`
  position: absolute;
  font-size: 1.6rem;
  color: #212121;
  font-weight: bold;
`

interface Props {
  poster: string
  rating: number
}

const MovieCard: React.FC<Props> = ({ poster, rating }) => {
  return (
    <Wrapper>
      <Poster src={poster} alt="poster image" />
      <RatingWrapper>
        <CircularProgress className="progress-base" variant="static" value={100} />
        <CircularProgress variant="static" value={rating} />
        <Rating>{(rating / 10).toFixed(1)}</Rating>
      </RatingWrapper>
    </Wrapper>
  )
}

export default MovieCard
