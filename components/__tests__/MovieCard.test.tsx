import React from 'react'
import { render, screen } from '@/helpers/test-utils'
import MovieCard from '@/components/MovieCard'

test('should render MovieCard properly', () => {
  const props = {
    poster: '/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 73,
    title: 'Birds of Prey',
    genres: ['Action', 'Horror', 'Comedy'],
  }

  render(<MovieCard {...props} />)
  expect(screen.getByAltText('poster image')).toHaveAttribute(
    'src',
    `/w185${props.poster}`
  )
  expect(screen.getByText((props.rating / 10).toFixed(1))).toBeInTheDocument()
})
