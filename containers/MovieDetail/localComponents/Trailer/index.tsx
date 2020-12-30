import { Wrapper, Layer, PlayIcon, TrailerName } from './styles'

interface Props {
  url: string
  name: string
}

const Trailer: React.FC<Props> = ({ url, name }) => {
  const youtubeId = url.split('watch?v=')[1]

  return (
    <Wrapper>
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
