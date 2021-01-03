import { Wrapper, Layer, PlayIcon, TrailerName } from './styles'

interface Props {
  url: string
  name: string
  onClick: () => void
}

const Trailer: React.FC<Props> = ({ url, name, onClick }) => {
  const youtubeId = url.split('watch?v=')[1]

  return (
    <Wrapper onClick={onClick}>
      <img
        alt="Trailer Thumbnail"
        src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`}
      />
      <Layer>
        <PlayIcon color="#fff" size="4em" />
        <TrailerName title={name}>{name}</TrailerName>
      </Layer>
    </Wrapper>
  )
}

export default Trailer
