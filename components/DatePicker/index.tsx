import styled from 'styled-components'
import TextFieldMUI from '@material-ui/core/TextField'

const TextField = styled(TextFieldMUI)`
  && {
    label {
      font-size: 1.6rem;
      color: #8d96aa;
    }

    .date_picker-field {
      border-radius: 12px;

      .date_picker-input {
        font-size: 16px;
        line-height: 24px;
        color: #212121;
      }
    }
  }
`

interface Props {
  label?: string
  value?: string
  onChange?:
    | ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
    | undefined
}

const DatePicker: React.FC<Props> = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label={label}
      type="date"
      variant="outlined"
      color="primary"
      InputProps={{ className: 'date_picker-field' }}
      inputProps={{ className: 'date_picker-input' }}
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  )
}

export default DatePicker
