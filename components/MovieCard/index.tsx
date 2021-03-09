import { useState } from 'react'
import styled from 'styled-components'
import Poster from './Poster'
import Rating from './Rating'
import LayerInfo from './LayerInfo'
import ShareDialog from './ShareDialog'
import { SCREEN } from '@/styles/mediaBreakPoint'
import GLOBAL from '@/config/global'

const Wrapper = styled.div`
  position: relative;
  max-width: 200px;

  & > div:first-child {
    position: relative;
    height: auto;
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

export interface Props {
  posterUrl: string
  size: 'w185' | 'w342'
  rating: number
  title: string
  genres: string[]
  className?: string
  withMenu?: boolean
  url?: string
}

const DEFAULT_POSTER =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

const MovieCard: React.FC<Props> = ({
  posterUrl,
  size,
  rating,
  title,
  genres,
  className,
  withMenu = true,
  url,
}) => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)

  const posterImage = posterUrl
    ? `${GLOBAL.imageBaseURL}/${size}/${posterUrl}`
    : DEFAULT_POSTER

  return (
    <>
      <Wrapper className={className}>
        <div>
          <Poster src={posterImage} alt="poster image" />
          <Rating rating={rating} />
          {withMenu && (
            <LayerInfo
              onClickShare={() => {
                setIsShareDialogOpen(true)
              }}
            />
          )}
        </div>
        <MovieTitle>{title}</MovieTitle>
        {genres && <Genre>{genres.join(', ')}</Genre>}
      </Wrapper>
      <ShareDialog
        open={isShareDialogOpen}
        onClose={(e) => {
          e.stopPropagation()
          setIsShareDialogOpen(false)
        }}
        url={url}
      />
    </>
  )
}

export default MovieCard
