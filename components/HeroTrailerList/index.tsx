import React, { useState } from 'react'
import styled from 'styled-components'
import HeroTrailer from '@/components/HeroTrailer'

const Wrapper = styled.div`
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

const HeroWrapper = styled.div`
  display: inline-block;
  padding-right: 20px;
  vertical-align: middle;
`

interface Trailers {
  id: string
  url: string
  title: string
  summary: string
}

interface Props {
  trailers: Trailers[]
  muted: boolean
  onToggleMute: () => void
}

const HeroTrailerList: React.FC<Props> = ({ trailers, muted, onToggleMute }) => {
  const [selectedId, setSelectedId] = useState(trailers[0].id)

  return (
    <Wrapper>
      {trailers.map((val) => {
        return (
          <HeroWrapper key={val.id} onClick={() => setSelectedId(val.id)}>
            <HeroTrailer
              trailerData={{
                id: val.id,
                url: val.url,
                title: val.title,
                summary: val.summary,
              }}
              id={val.id}
              isSelected={selectedId === val.id}
              muted={muted}
              onToggleMute={onToggleMute}
              isItemList
            />
          </HeroWrapper>
        )
      })}
    </Wrapper>
  )
}

export default HeroTrailerList
