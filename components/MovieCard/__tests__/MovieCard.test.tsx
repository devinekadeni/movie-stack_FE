import React from 'react'
import { render, screen } from '@/helpers/test-utils'
import MovieCard, { DEFAULT_POSTER } from '@/components/MovieCard'

test('should render MovieCard properly', () => {
  const props = {
    poster: '/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 7.3,
    title: 'Birds of Prey',
    genres: ['Action', 'Horror', 'Comedy'],
  }

  const encodedUrl = encodeURIComponent(`/w185${props.poster}`)

  render(<MovieCard {...props} />)

  expect(screen.getByAltText('poster image')).toBeInTheDocument()
  expect(screen.getByAltText('poster image').getAttribute('src')).toContain(encodedUrl)
})

test('should render MovieCard with empty poster props', () => {
  const props = {
    poster: '',
    rating: 7.3,
    title: 'Birds of Prey',
    genres: ['Action', 'Horror', 'Comedy'],
  }

  const encodedUrl = encodeURIComponent(DEFAULT_POSTER)

  render(<MovieCard {...props} />)

  expect(screen.getByAltText('poster image').getAttribute('src')).toContain(encodedUrl)
})
