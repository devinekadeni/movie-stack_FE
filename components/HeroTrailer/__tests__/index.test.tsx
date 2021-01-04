import { render, screen, userEvent } from '@/helpers/test-utils'
import HeroTrailer from '..'

const data = {
  id: '123',
  url: 'video.mp4',
  title: 'random video',
  summary: 'random summary',
}

const commonProps = {
  muted: true,
  onToggleMute: jest.fn(),
  trailerData: data,
}

// render will use this wrapper for all test case except the first one
// because there is an issue with video html tag with muted props
// resource: https://github.com/testing-library/react-testing-library/issues/470
function renderIgnoringUnstableFlushDiscreteUpdates(component: React.ReactElement) {
  // eslint-disable-next-line no-console
  const originalError = console.error
  const error = jest.fn()
  // eslint-disable-next-line no-console
  console.error = error
  const result = render(component)
  expect(error).toHaveBeenCalledTimes(1)
  expect(error).toHaveBeenCalledWith(
    'Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.%s',
    expect.any(String)
  )
  // eslint-disable-next-line no-console
  console.error = originalError
  return result
}

test('render Hero Trailer component properly', () => {
  const props = { ...commonProps, muted: false }
  render(<HeroTrailer {...props} />)

  expect(screen.getByTestId('hero-trailer-wrapper')).toBeInTheDocument()
})

test('render Hero Trailer when hover', () => {
  const props = { ...commonProps }
  renderIgnoringUnstableFlushDiscreteUpdates(<HeroTrailer {...props} />)

  userEvent.hover(screen.getByTestId('hero-trailer-wrapper'))
  expect(screen.getByText(props.trailerData.title)).toBeInTheDocument()
  expect(screen.getByText(props.trailerData.summary)).toBeInTheDocument()
})
