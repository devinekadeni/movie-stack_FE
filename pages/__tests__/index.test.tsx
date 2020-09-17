import { render, screen } from '@testing-library/react'
import Homepage from '@/pages/index'
import '@testing-library/jest-dom'

test('should render Homepage properly', () => {
  render(<Homepage />)

  expect(screen.getByText('Home page')).toBeInTheDocument()
})
