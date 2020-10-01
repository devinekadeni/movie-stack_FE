import React, { useRef, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Wrapper, ScreenBlocker, LayerInfo, ActionWrapper, Button } from './styles'

interface TrailerData {
  id: string
  url: string
  title: string
  summary: string
}

interface Props {
  trailerData: TrailerData
  isSelected?: boolean
  muted?: boolean
  isItemList?: boolean
  [key: string]: unknown
}

const HeroTrailer: React.FC<Props> = ({
  trailerData,
  isSelected,
  muted,
  isItemList,
  ...props
}) => {
  const [isLazy, setIsLazy] = useState(isSelected)
  const heroEl = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (isItemList) {
      if (isSelected) {
        heroEl?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
        setIsLazy(false)
      } else {
        setTimeout(() => {
          setIsLazy(true)
        }, 500)
      }
    }
  }, [isSelected])

  const addToMyList = () => {
    // TODO: add movie to my list
  }

  const goToDetails = () => {
    // TODO: go to movie details page
  }

  return (
    <Wrapper ref={heroEl}>
      <ReactPlayer
        url={trailerData.url}
        light={isLazy}
        playing
        muted={muted}
        loop
        width="90vw"
        height="37.4vw"
        config={{
          youtube: {
            playerVars: {
              disablekb: 1,
              fs: 0,
            },
          },
        }}
        {...props}
      />
      <ScreenBlocker />
      <LayerInfo>
        <h1>{trailerData.title}</h1>
        <p>{trailerData.summary}</p>
        <ActionWrapper>
          <Button variant="outlined" onClick={addToMyList}>
            Add to My List
          </Button>
          <Button variant="contained" onClick={goToDetails}>
            See Details
          </Button>
        </ActionWrapper>
      </LayerInfo>
    </Wrapper>
  )
}

export default HeroTrailer
