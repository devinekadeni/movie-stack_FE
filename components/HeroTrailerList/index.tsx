import React, { useState } from 'react'
import HeroTrailer from '@/components/HeroTrailer'
import Indicators from './Indicators'
import { HeroWrapper, StyledCarousel } from './styles'

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
  autoplay?: boolean
}

const HeroTrailerList: React.FC<Props> = ({
  trailers,
  muted,
  onToggleMute,
  autoplay,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0)

  return (
    <>
      <StyledCarousel
        centerMode
        centerSlidePercentage={92}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        onClickItem={(item) => {
          setSelectedIdx(item)
        }}
        selectedItem={selectedIdx}
      >
        {trailers.map((val, i) => {
          return (
            <HeroWrapper key={val.id} index={i}>
              <HeroTrailer
                trailerData={{
                  id: val.id,
                  url: val.url,
                  title: val.title,
                  summary: val.summary,
                }}
                id={val.id}
                isSelected={i === selectedIdx}
                muted={muted}
                onToggleMute={onToggleMute}
                isItemList
                autoplay={autoplay}
              />
            </HeroWrapper>
          )
        })}
      </StyledCarousel>
      <Indicators
        amount={trailers.length}
        selectedIdx={selectedIdx}
        onDotClick={(idx) => setSelectedIdx(idx)}
      />
    </>
  )
}

export default HeroTrailerList
