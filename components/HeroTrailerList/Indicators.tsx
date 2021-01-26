import { IndicatorsWrapper, Dot } from './styles'

interface Props {
  amount: number
  selectedIdx: number
  onDotClick: (idx: number) => void
}

const Indicators: React.FC<Props> = ({ amount, selectedIdx, onDotClick }) => {
  return (
    <IndicatorsWrapper>
      {[...new Array(amount)].map((_, i) => {
        return (
          <Dot key={i} isSelected={selectedIdx === i} onClick={() => onDotClick(i)} />
        )
      })}
    </IndicatorsWrapper>
  )
}

export default Indicators
