import { useState } from 'react'
import styled from 'styled-components'
import ButtonMUI from '@material-ui/core/Button'
import IconButtonMUI from '@material-ui/core/IconButton'
import { DotsHorizontalRounded as DotIcon } from '@styled-icons/boxicons-regular/DotsHorizontalRounded'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`

const IconButton = styled(IconButtonMUI)`
  && {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
    z-index: 2;

    &:hover {
      background-color: rgba(92, 92, 92, 0.5);
    }
  }
`

const Button = styled(ButtonMUI)`
  && {
    margin: 8px 0;
    border-radius: 16px;
    border: 1px solid white;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-transform: initial;

    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
`

const ActionWrapper = styled.div<{ $isShown: boolean }>`
  position: absolute;
  background-color: rgba(33, 33, 33, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  cursor: initial;
  z-index: 1;
  transition: opacity 0.3s, height 0.3s;
  overflow: hidden;
  ${(p) => `
    opacity: ${p.$isShown ? 1 : 0};
    height: ${p.$isShown ? '100%' : '0'};
  `}
`

const LayerInfo: React.FC = () => {
  const [toggleActionLayer, setTogleActionLayer] = useState(false)

  const handleAddToList = () => {
    // TODO: add to list function
  }

  const handleShare = () => {
    // TODO: share function
  }

  return (
    <Wrapper>
      <IconButton
        color="primary"
        onClick={(e) => {
          e.stopPropagation()
          setTogleActionLayer(!toggleActionLayer)
        }}
      >
        {toggleActionLayer ? (
          <CloseIcon size="18" color="#fff" />
        ) : (
          <DotIcon size="18" color="#fff" />
        )}
      </IconButton>
      <ActionWrapper $isShown={toggleActionLayer} onClick={(e) => e.stopPropagation()}>
        <Button variant="outlined" onClick={handleAddToList}>
          Add to List
        </Button>
        <Button variant="outlined" onClick={handleShare}>
          Share
        </Button>
      </ActionWrapper>
    </Wrapper>
  )
}

export default LayerInfo
