import { render, screen } from '@/helpers/test-utils'
import MovieCard from '@/components/MovieCard'

test('should render MovieCard properly', () => {
  const props = {
    posterUrl: '/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    rating: 7.3,
    title: 'Birds of Prey',
    genres: ['Action', 'Horror', 'Comedy'],
  }

  const optimizedImgByNextjs =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

  render(<MovieCard {...props} />)

  expect(screen.getByAltText('poster image')).toBeInTheDocument()
  expect(screen.getByAltText('poster image').getAttribute('src')).toContain(
    optimizedImgByNextjs
  )
})

test('should render MovieCard with empty poster props', () => {
  const props = {
    posterUrl: '',
    rating: 7.3,
    title: 'Birds of Prey',
    genres: ['Action', 'Horror', 'Comedy'],
  }

  const optimizedImgByNextjs =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

  render(<MovieCard {...props} />)

  expect(screen.getByAltText('poster image').getAttribute('src')).toContain(
    optimizedImgByNextjs
  )
})
