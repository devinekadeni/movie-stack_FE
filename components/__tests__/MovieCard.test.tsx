import React from 'react'
import { render, screen } from '@/helpers/test-utils'
import MovieCard from '@/components/MovieCard'

test('should render MovieCard properly', () => {
  const props = {
    poster: 'https://image.tmdb.org/t/p/w185/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 73,
    movieTitle: 'Birds of Prey',
    genre: ['Action', 'Horror', 'Comedy'],
  }

  render(<MovieCard {...props} />)
  expect(screen.getByAltText('poster image')).toHaveAttribute('src', props.poster)
  expect(screen.getByText((props.rating / 10).toFixed(1))).toBeInTheDocument()
})
