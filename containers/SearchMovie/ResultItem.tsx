import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
  padding: 8px;
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }

  img {
    object-fit: contain;
    margin-right: 8px;
    border-radius: 4px;
    max-width: 45px;
    min-height: 68px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
`

const MovieTitle = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const GenreList = styled.p`
  margin: 0 0 4px;
  font-size: 1.2rem;
  color: #838994;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ReleaseDate = styled.span`
  font-size: 1rem;
`

interface Props {
  imgUrl: string
  title: string
  genres: string[]
  releaseDate: string
  onClick: () => void
}

const ResultItem: React.FC<Props> = ({ imgUrl, title, genres, releaseDate, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <img src={imgUrl} alt="movie poster" />
      <div>
        <MovieTitle title={title}>{title}</MovieTitle>
        <GenreList title={genres.join(', ')}>{genres.join(', ')}</GenreList>
        <ReleaseDate>{releaseDate}</ReleaseDate>
      </div>
    </Wrapper>
  )
}

export default ResultItem
