import React, { useContext, useEffect, useRef, useState } from 'react'

import { MuteContext } from '@/context/MuteContext'

import styled from 'styled-components'
import HeroTrailerList from '@/components/HeroTrailerList'
import HeroTrailer from '@/components/HeroTrailer'
import MovieShowCaseComponent from './localComponents/MovieShowCase'

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
  margin-bottom: 72px;
`

const TRAILERS = [
  {
    id: '1',
    url: 'https://www.youtube.com/watch?v=01ON04GCwKs',
    title: 'Jurassic World: Fallen Kingdom (2018)',
    summary:
      'Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
  },
  {
    id: '2',
    url: 'https://www.youtube.com/watch?v=01ON04GCwKs',
    title: 'Jurassic World: Fallen Kingdom (2018)',
    summary:
      'Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
  },
  {
    id: '3',
    url: 'https://www.youtube.com/watch?v=01ON04GCwKs',
    title: 'Jurassic World: Fallen Kingdom (2018)',
    summary:
      'Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
  },
  {
    id: '4',
    url: 'https://www.youtube.com/watch?v=01ON04GCwKs',
    title: 'Jurassic World: Fallen Kingdom (2018)',
    summary:
      'Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
  },
]

function isInViewportVertically(el: null | HTMLDivElement) {
  if (!el) {
    return false
  }

  const { top, bottom, height } = el.getBoundingClientRect()

  // NOTE: 117 --> header height
  if (
    (top >= 117 && top <= window.innerHeight - (1 / 2) * height) ||
    (bottom >= (1 / 2) * height + 117 && bottom <= window.innerHeight)
  ) {
    return true
  }

  return false
}

const Home: React.FC = () => {
  const [isMute, setIsMute] = useContext(MuteContext)
  const [firstHeroAutoplay, setFirstHeroAutoplay] = useState(false)
  const [secondHeroAutoplay, setSecondHeroAutoplay] = useState(false)

  const firstHeroEl = useRef<null | HTMLDivElement>(null)
  const secondHeroEl = useRef<null | HTMLDivElement>(null)

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
        <HeroTrailerList
          trailers={TRAILERS}
          muted={isMute}
          onToggleMute={onToggleMute}
          autoplay={firstHeroAutoplay}
        />
      </div>
      <MovieShowCase categoryTitle={`WHAT's\nPOPULAR`} movieType="POPULAR" />
      <MovieShowCase categoryTitle={`NOW\nPLAYING`} movieType="NOW_PLAYING" />
      <TrailerWrapper ref={secondHeroEl}>
        <HeroTrailer
          trailerData={TRAILERS[0]}
          width="100%"
          height="40.4vw"
          muted={isMute}
          onToggleMute={onToggleMute}
          autoplay={secondHeroAutoplay}
        />
      </TrailerWrapper>
      <MovieShowCase categoryTitle={`COMING\nSOON`} movieType="UPCOMING" />
      <MovieShowCase categoryTitle={`TOP\nRATED`} movieType="TOP_RATED" />
    </Wrapper>
  )
}

export default Home
