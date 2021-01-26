import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

const StyledInputLabel = styled(InputLabel)`
  && {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #8d96aa;
  }
`

interface Props {
  value: string
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void
  label?: string
  IconComponent?: React.ElementType
  variant?: 'standard' | 'outlined' | 'filled'
  children: React.ReactNode
}

const DropDown: React.FC<Props> = ({
  value,
  onChange,
  label,
  IconComponent,
  children,
  variant,
}) => {
  return (
    <FormControl variant={variant}>
      <StyledInputLabel>Sort by</StyledInputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        SelectDisplayProps={{
          style: {
            padding: '12px 88px 12px 16px',
            fontSize: '16px',
            lineHeight: '24px',
          },
        }}
        IconComponent={IconComponent}
      >
        {children}
      </Select>
    </FormControl>
  )
}

export default DropDown
