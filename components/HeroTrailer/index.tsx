import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import { VolumeUpFill } from '@styled-icons/bootstrap/VolumeUpFill'
import { VolumeMuteFill } from '@styled-icons/bootstrap/VolumeMuteFill'
import {
  Wrapper,
  ScreenBlocker,
  LayerInfo,
  ActionWrapper,
  Button,
  MuteButton,
} from './styles'

export interface TrailerData {
  id: string
  url: string
  title: string
  summary: string
}

interface Props {
  trailerData: TrailerData
  isSelected?: boolean
  muted: boolean
  onToggleMute: () => void
  isItemList?: boolean
  [key: string]: unknown
  className?: string
  autoplay?: boolean
}

const HeroTrailer: React.FC<Props> = ({
  trailerData,
  isSelected,
  muted,
  onToggleMute,
  isItemList,
  className,
  autoplay,
  ...props
}) => {
  const [isLazy, setIsLazy] = useState(isSelected)

  useEffect(() => {
    if (isItemList) {
      if (isSelected) {
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
    <Wrapper className={className}>
      <ReactPlayer
        url={trailerData.url}
        light={isLazy}
        playing={autoplay}
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
        <MuteButton onClick={onToggleMute}>
          {muted ? <VolumeMuteFill /> : <VolumeUpFill />}
        </MuteButton>
      </LayerInfo>
    </Wrapper>
  )
}

export default HeroTrailer
