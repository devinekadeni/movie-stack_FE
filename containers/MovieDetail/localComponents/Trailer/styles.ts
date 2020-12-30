import styled from 'styled-components'
import { PlayCircleOutline } from '@styled-icons/material/PlayCircleOutline'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  transition: border 0.3s;
  cursor: pointer;
  min-height: 156px;

  &:hover {
    border: 1px solid #11cfbc;
  }

  img {
    object-fit: cover;
    width: 100%;
  }
`

export const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`

export const PlayIcon = styled(PlayCircleOutline)`
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
`

export const TrailerName = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  font-weight: bold;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 12px 8px;
`
