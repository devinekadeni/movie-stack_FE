import React from 'react'
import styled from 'styled-components'
import GLOBAL from '@/config/global'

interface Props {
  url: string
  name: string
  characterName: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin-right: 16px;
    border-radius: 50%;
    object-fit: cover;
    width: 72px;
    height: 72px;
  }

  div {
    display: grid;
    row-gap: 4px;

    h5 {
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 24px;
      color: #212121;
      margin: 0;
    }

    span {
      font-family: Noto Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #40464e;
    }
  }
`

const baseUrl = `${GLOBAL.imageBaseURL}/w92`
const DEFAULT_IMG =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'

const Avatar: React.FC<Props> = ({ url, name, characterName }) => {
  return (
    <Wrapper>
      <img src={url ? `${baseUrl}${url}` : DEFAULT_IMG} alt={name} />
      <div>
        <h5>{name}</h5>
        <span>{characterName}</span>
      </div>
    </Wrapper>
  )
}

export default Avatar
