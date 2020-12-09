import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

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

const RatingValue = styled.span`
  position: absolute;
  font-size: 1.6rem;
  color: #212121;
  font-weight: bold;
`

interface Props {
  rating: number
}

const Rating: React.FC<Props> = ({ rating }) => {
  const ratingStar = rating === 0 ? 'NR' : rating * 10

  return (
    <RatingWrapper>
      <CircularProgress className="progress-base" variant="static" value={100} />
      <CircularProgress variant="static" value={rating} />
      <RatingValue>{ratingStar}</RatingValue>
    </RatingWrapper>
  )
}

export default Rating
