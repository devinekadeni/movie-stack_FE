import { render, screen } from '@/helpers/test-utils'
import MovieCard from '@/components/MovieCard'

test('should render MovieCard properly', () => {
  const props = {
    posterUrl: '/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 7.3,
    title: 'Birds of Prey',
    genres: ['Action', 'Horror', 'Comedy'],
  }

  render(<MovieCard {...props} />)

  expect(screen.getByAltText('poster image')).toBeInTheDocument()
  expect(screen.getByAltText('poster image').getAttribute('src')).toContain(
    props.posterUrl
  )
})

test('should render MovieCard with empty poster props', () => {
  const props = {
    posterUrl: '',
    rating: 7.3,
    title: 'Birds of Prey',
    genres: ['Action', 'Horror', 'Comedy'],
  }

  render(<MovieCard {...props} />)

  expect(screen.getByAltText('poster image').getAttribute('src')).toContain(
    props.posterUrl
  )
})
