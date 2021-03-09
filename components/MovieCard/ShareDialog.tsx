import { useRef, useState } from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import DialogTitleMUI from '@material-ui/core/DialogTitle'
import DialogContentMUI from '@material-ui/core/DialogContent'
import SnackbarMUI from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { BASIC_COLOR } from '@/styles/_colors'

const DialogTitle = styled(DialogTitleMUI)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 0;
    }
  }
`

const DialogContent = styled(DialogContentMUI)`
  && {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 12px;
    min-width: 400px;
    padding-bottom: 24px;
    padding-top: 0;
    font-size: 16px;
  }
`

const Snackbar = styled(SnackbarMUI)`
  && {
    & > div {
      background-color: ${BASIC_COLOR.mainGreen};
      font-size: 14px;
      min-width: unset;
      width: 150px;
      display: flex;
      justify-content: center;
    }
  }
`

interface Props {
  open: boolean
  onClose?: (e: React.MouseEvent) => void
  url?: string
}

const ShareDialog: React.FC<Props> = ({ open, onClose, url }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleCopyUrl = () => {
    inputRef.current?.select()
    document.execCommand('copy')
    setSnackbarOpen(true)
  }

  return (
    <>
      <Dialog open={open} onClose={onClose} onClick={(e) => e.stopPropagation()}>
        <DialogTitle disableTypography>
          <h3>Share Movie</h3>
          <IconButton onClick={onClose}>
            <CloseIcon size="24" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth value={url} inputRef={inputRef} onClick={handleCopyUrl} />
          <Button variant="contained" color="primary" onClick={handleCopyUrl}>
            Copy
          </Button>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
        message="URL Copied"
      />
    </>
  )
}

export default ShareDialog
