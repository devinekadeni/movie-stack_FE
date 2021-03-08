import { useState, useRef } from 'react'
import { useQuery } from '@apollo/client'
import * as queries from './queries.graphql'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { Share as ShareIcon } from '@styled-icons/material/Share'
import { PlaylistAdd as AddListIcon } from '@styled-icons/material/PlaylistAdd'
import { ChevronLeft as LeftArrowIcon } from '@styled-icons/material-rounded/ChevronLeft'
import { ChevronRight as RightArrowIcon } from '@styled-icons/material-rounded/ChevronRight'
import GLOBAL from '@/config/global'

import TextInfo from './localComponents/TextInfo'
import Avatar from './localComponents/Avatar'
import Trailer from './localComponents/Trailer'
import DialogMedia from './localComponents/DialogMedia'
import { isReleased } from './helper'
import {
  Wrapper,
  PosterSection,
  MovieCard,
  ActionButtonGroup,
  SummarySection,
  InfoSection,
  Synopsis,
  CastSection,
  CastList,
  MoreCastList,
  SeeMoreCast,
  MediaSection,
  Backdrop,
  ArrowButton,
} from './styles'

interface Props {
  movieId: string
}

interface Genre {
  id: string
  name: string
}

interface MovieData {
  id: string
  title: string
  summary: string
  poster: string
  genreIds: string[]
  genres: Genre[]
  duration: number
  rating: number
  releaseDate: string
}

interface Cast {
  id: string
  name: string
  photo: string
  character: string
  order: number
}

interface MovieDetail {
  movie: MovieData
  castList: Cast[]
}

interface Trailer {
  id: string
  name: string
  url: string
}

interface Backdrop {
  filePath: string
  voteAvg: number
}

interface MovieMedia {
  trailers: Trailer[]
  backdrops: Backdrop[]
}

const MovieDetail: React.FC<Props> = ({ movieId }) => {
  const movieDetail = useQuery(queries.MovieDetail, {
    variables: { id: movieId },
  })
  const mediaData = useQuery(queries.MovieMedia, {
    variables: { id: movieId },
  })

  const [dialogMedia, setDialogMedia] = useState({ type: '', index: 0, isOpen: false })
  const [toggleCast, setToggleCast] = useState(false)
  const toggleRef = useRef<null | HTMLDivElement>(null)

  const { trailers, backdrops }: MovieMedia = mediaData.data?.movieMedia || {}
  const { movie, castList }: MovieDetail = movieDetail.data?.movieDetail || {
    movie: {},
    castList: [],
  }

  const { baseCast, moreCast } = [...castList]
    .sort((a, b) => a.order - b.order)
    .reduce(
      (acc: { baseCast: Cast[]; moreCast: Cast[] }, val, idx) => {
        if (idx < 6) {
          return {
            baseCast: [...acc.baseCast, val],
            moreCast: [],
          }
        }

        return {
          baseCast: [...acc.baseCast],
          moreCast: [...acc.moreCast, val],
        }
      },
      { baseCast: [], moreCast: [] }
    )

  const releasedYear = movie?.releaseDate?.split('-')[0] || ''
  const releasedStatus = isReleased(movie?.releaseDate || '') ? 'Released' : 'Coming Soon'

  const dialogUrl = {
    video: trailers?.[dialogMedia.index]?.url,
    image: `${GLOBAL.imageBaseURL}/w1280${backdrops?.[dialogMedia.index]?.filePath}`,
  }

  const isFirstMedia =
    ((trailers?.length === 0 && dialogMedia.type === 'image') ||
      dialogMedia.type === 'video') &&
    dialogMedia.index === 0

  const isLastMedia =
    (backdrops?.length === 0 &&
      dialogMedia.type === 'video' &&
      dialogMedia.index === trailers?.length - 1) ||
    (dialogMedia.type === 'image' && dialogMedia.index === backdrops?.length - 1)

  const onCloseDialogMedia = () => {
    setDialogMedia({
      type: '',
      index: 0,
      isOpen: false,
    })
  }

  const onNextMedia = () => {
    const isLastTrailer =
      dialogMedia.type === 'video' && dialogMedia.index === trailers.length - 1

    if (isLastTrailer) {
      setDialogMedia((prev) => ({ ...prev, type: 'image', index: 0 }))
      return
    }
    setDialogMedia((prev) => ({ ...prev, index: prev.index + 1 }))
  }

  const onPreviousMedia = () => {
    const isFirstBackdrop = dialogMedia.type === 'image' && dialogMedia.index === 0

    if (isFirstBackdrop) {
      setDialogMedia((prev) => ({ ...prev, type: 'video', index: trailers.length - 1 }))
      return
    }
    setDialogMedia((prev) => ({ ...prev, index: prev.index - 1 }))
  }

  return (
    <Wrapper>
      <PosterSection>
        {movie.id && (
          <MovieCard
            size="w342"
            posterUrl={movie.poster}
            rating={movie.rating}
            title={movie.title}
            genres={movie.genres.map((genre) => genre.name)}
            withMenu={false}
          />
        )}
        <ActionButtonGroup>
          <button>
            <ShareIcon size="1.2em" /> <span>Share</span>
          </button>
          <span />
          <button>
            <AddListIcon size="1.5em" /> <span>Add to List</span>
          </button>
        </ActionButtonGroup>
      </PosterSection>

      <SummarySection>
        <InfoSection>
          <TextInfo title="YEAR" value={releasedYear} />
          <TextInfo title="DURATION" value={`${movie.duration} minutes`} />
          <TextInfo title="STATUS" value={releasedStatus} />
        </InfoSection>
        <Synopsis>
          <h5>Synopsis</h5>
          <p>{movie.summary}</p>
        </Synopsis>
        <CastSection>
          <h5>Cast</h5>
          <CastList>
            {baseCast.map((cast) => {
              return (
                <Avatar
                  key={cast.id}
                  url={cast.photo}
                  name={cast.name}
                  characterName={cast.character}
                />
              )
            })}
          </CastList>
          {moreCast.length && (
            <>
              <MoreCastList
                toggleCast={toggleCast}
                containerHeight={
                  toggleCast && toggleRef.current ? toggleRef.current.offsetHeight : 0
                }
              >
                <div ref={toggleRef}>
                  {moreCast.map((cast) => {
                    return (
                      <Avatar
                        key={cast.id}
                        url={cast.photo}
                        name={cast.name}
                        characterName={cast.character}
                      />
                    )
                  })}
                </div>
              </MoreCastList>
              <SeeMoreCast
                toggleCast={toggleCast}
                role="button"
                tabIndex={-1}
                onKeyDown={(e) => {
                  if (e.code === 'ArrowDown') {
                    setToggleCast(true)
                  } else if (e.code === 'ArrowUp') {
                    setToggleCast(false)
                  }
                }}
                onClick={() => {
                  setToggleCast(!toggleCast)
                }}
              >
                See Full Cast & Crew&nbsp;
                <KeyboardArrowDown size="1.2em" />
              </SeeMoreCast>
            </>
          )}
        </CastSection>
      </SummarySection>

      <MediaSection>
        {trailers?.map((trailer, idx) => (
          <Trailer
            key={trailer.url}
            url={trailer.url}
            name={trailer.name}
            onClick={() => {
              setDialogMedia({ type: 'video', index: idx, isOpen: true })
            }}
          />
        ))}
        {backdrops?.map((backdrop, idx) => (
          <Backdrop
            key={backdrop.filePath}
            onClick={() => {
              setDialogMedia({ type: 'image', index: idx, isOpen: true })
            }}
          >
            <img
              src={`${GLOBAL.imageBaseURL}/w300${backdrop.filePath}`}
              alt="backdrop_image"
            />
          </Backdrop>
        ))}
      </MediaSection>

      <DialogMedia
        isOpen={dialogMedia.isOpen}
        onClose={onCloseDialogMedia}
        type={dialogMedia.type}
        url={dialogUrl[dialogMedia.type as 'video' | 'image'] || ''}
        renderControl={
          <>
            {!isFirstMedia && (
              <ArrowButton
                direction="left"
                title="Previous Media"
                onClick={onPreviousMedia}
              >
                <LeftArrowIcon size="3em" />
              </ArrowButton>
            )}
            {!isLastMedia && (
              <ArrowButton direction="right" title="Next Media" onClick={onNextMedia}>
                <RightArrowIcon size="3em" />
              </ArrowButton>
            )}
          </>
        }
      />
    </Wrapper>
  )
}

export default MovieDetail
