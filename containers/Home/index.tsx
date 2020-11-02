import React, { useContext } from 'react'

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

const MOVIE_LIST = [
  {
    id: '1',
    poster: 'https://image.tmdb.org/t/p/w185/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 73,
    movieTitle: 'Birds of Prey',
    genre: [
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
    ],
  },
  {
    id: '2',
    poster: 'https://image.tmdb.org/t/p/w185/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 73,
    movieTitle: 'Birds of Prey',
    genre: [
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
    ],
  },
  {
    id: '3',
    poster: 'https://image.tmdb.org/t/p/w185/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 73,
    movieTitle: 'Birds of Prey',
    genre: [
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
    ],
  },
  {
    id: '4',
    poster: 'https://image.tmdb.org/t/p/w185/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 73,
    movieTitle: 'Birds of Prey',
    genre: [
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
    ],
  },
  {
    id: '5',
    poster: 'https://image.tmdb.org/t/p/w185/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 73,
    movieTitle: 'Birds of Prey',
    genre: [
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
      'Action',
      'Crime',
      'Comedy',
    ],
  },
]

const Home: React.FC = () => {
  const [isMute, setIsMute] = useContext(MuteContext)

  const onToggleMute = () => {
    setIsMute(!isMute)
  }

  return (
    <Wrapper>
      <div>
        <HeroTrailerList trailers={TRAILERS} muted={isMute} onToggleMute={onToggleMute} />
      </div>
      <MovieShowCase categoryTitle={`WHAT's\nPOPULAR`} movieList={MOVIE_LIST} />
      <MovieShowCase categoryTitle={`NOW\nPLAYING`} movieList={MOVIE_LIST} />
      <TrailerWrapper>
        <HeroTrailer
          light
          trailerData={TRAILERS[0]}
          width="100%"
          height="40.4vw"
          muted={isMute}
          onToggleMute={onToggleMute}
        />
      </TrailerWrapper>
      <MovieShowCase categoryTitle={`COMING\nSOON`} movieList={MOVIE_LIST} />
      <MovieShowCase categoryTitle={`TOP\nRATED`} movieList={MOVIE_LIST} />
    </Wrapper>
  )
}

export default Home
