import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Dialog from '@material-ui/core/Dialog'
import { Close as CloseIcon } from '@styled-icons/material-rounded/Close'

interface Props {
  isOpen: boolean
  onClose: () => void
  type: string
  url: string
  renderControl?: React.ReactNode
}

const CloseButton = styled.span`
  position: fixed;
  right: 10px;
  top: 10px;
  cursor: pointer;
  color: #e3e3e3;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

const ImageWrapper = styled.div`
  img {
    object-fit: cover;
  }
`

const DialogMedia: React.FC<Props> = ({ isOpen, onClose, type, url, renderControl }) => {
  return (
    <Dialog open={isOpen} maxWidth={false}>
      <>
        <CloseButton onClick={onClose} title="Close Media">
          <CloseIcon size="3em" />
        </CloseButton>
        {renderControl}
        {type === 'image' && (
          <ImageWrapper>
            <img src={url} alt="Dialog detail" />
          </ImageWrapper>
        )}
        {type === 'video' && (
          <ReactPlayer url={url} playing controls width="90vw" height="90vh" />
        )}
      </>
    </Dialog>
  )
}

export default DialogMedia
