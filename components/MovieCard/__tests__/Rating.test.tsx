import { render, screen } from '@/helpers/test-utils'
import Rating from '../Rating'

test('should render Rating properly', () => {
  render(<Rating rating={7.3} />)

  expect(screen.getByText('73')).toBeInTheDocument()
})

test('should render Rating with 0 rating props', () => {
  render(<Rating rating={0} />)

  expect(screen.getByText('NR')).toBeInTheDocument()
})

test('should render Rating without rating props', () => {
  render(<Rating />)

  expect(screen.getByText('NR')).toBeInTheDocument()
})
