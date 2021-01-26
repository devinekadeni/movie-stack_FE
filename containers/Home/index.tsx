import { useContext, useEffect, useRef, useState, useMemo } from 'react'
import { useQuery } from '@apollo/client'
import * as queries from './queries.graphql'

import { MuteContext } from '@/context/MuteContext'

import styled from 'styled-components'
import HeroTrailerList from '@/components/HeroTrailerList'
import HeroTrailer, { TrailerData } from '@/components/HeroTrailer'
import MovieShowCaseComponent from './localComponents/MovieShowCase'
import { isInViewportVertically, shuffleArray } from './helper'

const Wrapper = styled.div`
  & > div:first-child {
    margin-bottom: 80px;
    position: relative;
  }
`

const TrailerWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 64px;
`

const MovieShowCase = styled(MovieShowCaseComponent)`
  margin-bottom: 72px !important;
`

const Home: React.FC = () => {
  const [isMute, setIsMute] = useContext(MuteContext)
  const [firstHeroAutoplay, setFirstHeroAutoplay] = useState(false)
  const [secondHeroAutoplay, setSecondHeroAutoplay] = useState(false)

  const { loading, error, data } = useQuery(queries.PopularTrailerList)

  const firstHeroEl = useRef<null | HTMLDivElement>(null)
  const secondHeroEl = useRef<null | HTMLDivElement>(null)

  const trailerData: {
    popularTrailer: TrailerData[]
    firstRandomTrailer: TrailerData
  } = useMemo(() => {
    if (loading || error) {
      return { popularTrailer: [], firstRandomTrailer: [] }
    }

    const validTrailer = data.popularTrailerList.filter((val: TrailerData) => !!val.url)

    const popularTrailer = validTrailer.slice(0, 4)
    const firstRandomTrailer = shuffleArray(validTrailer.slice(4, validTrailer.length))[0]

    return { popularTrailer, firstRandomTrailer }
  }, [data, loading, error])

  useEffect(() => {
    function autoplayHeroDecision() {
      const isFirstHeroShouldplay = isInViewportVertically(firstHeroEl?.current)
      const isSecondHeroShouldplay = isInViewportVertically(secondHeroEl?.current)

      setFirstHeroAutoplay(isFirstHeroShouldplay)
      setSecondHeroAutoplay(isSecondHeroShouldplay)
    }

    window.addEventListener('scroll', autoplayHeroDecision)

    return () => {
      window.removeEventListener('scroll', autoplayHeroDecision)
    }
  }, [])

  const onToggleMute = () => {
    setIsMute(!isMute)
  }

  return (
    <Wrapper>
      <div ref={firstHeroEl}>
        {data && (
          <HeroTrailerList
            trailers={trailerData.popularTrailer}
            muted={isMute}
            onToggleMute={onToggleMute}
            autoplay={firstHeroAutoplay}
          />
        )}
      </div>
      <MovieShowCase categoryTitle={`WHAT's\nPOPULAR`} movieType="POPULAR" />
      <MovieShowCase categoryTitle={`NOW\nPLAYING`} movieType="NOW_PLAYING" />
      <TrailerWrapper ref={secondHeroEl}>
        {data && (
          <HeroTrailer
            trailerData={trailerData.firstRandomTrailer}
            width="100%"
            height="40.4vw"
            muted={isMute}
            onToggleMute={onToggleMute}
            autoplay={secondHeroAutoplay}
          />
        )}
      </TrailerWrapper>
      <MovieShowCase categoryTitle={`COMING\nSOON`} movieType="UPCOMING" />
      <MovieShowCase categoryTitle={`TOP\nRATED`} movieType="TOP_RATED" />
    </Wrapper>
  )
}

export default Home
