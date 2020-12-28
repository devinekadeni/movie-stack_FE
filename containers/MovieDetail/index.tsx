import { useState, useRef } from 'react'
import { useQuery } from '@apollo/client'
import * as queries from './queries.graphql'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { Share as ShareIcon } from '@styled-icons/material/Share'
import { PlaylistAdd as AddListIcon } from '@styled-icons/material/PlaylistAdd'

import TextInfo from './localComponents/TextInfo'
import Avatar from './localComponents/Avatar'
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

const MovieDetail: React.FC<Props> = ({ movieId }) => {
  const { data } = useQuery(queries.MovieDetail, {
    variables: { id: movieId },
  })
  const [toggleCast, setToggleCast] = useState(false)
  const toggleRef = useRef<null | HTMLDivElement>(null)

  const movieData: MovieData = data?.movieDetail?.movie || {}
  const castData: Cast[] = [...(data?.movieDetail?.castList || [])]

  const { baseCast, moreCast } = castData
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

  const releasedYear = movieData?.releaseDate?.split('-')[0] || ''
  const releasedStatus = isReleased(movieData?.releaseDate || '')
    ? 'Released'
    : 'Coming Soon'

  return (
    <Wrapper>
      <PosterSection>
        {movieData.id && (
          <MovieCard
            poster={movieData.poster}
            rating={movieData.rating}
            title={movieData.title}
            genres={movieData.genres.map((genre) => genre.name)}
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
          <TextInfo title="DURATION" value={`${movieData.duration} minutes`} />
          <TextInfo title="STATUS" value={releasedStatus} />
        </InfoSection>
        <Synopsis>
          <h5>Synopsis</h5>
          <p>{movieData.summary}</p>
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

      <MediaSection>media</MediaSection>
    </Wrapper>
  )
}

export default MovieDetail
