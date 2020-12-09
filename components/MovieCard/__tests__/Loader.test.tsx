import React from 'react'
import { render, screen, waitFor } from '@/helpers/test-utils'
import Loader from '../Loader'
import preloadAll from 'jest-next-dynamic'

test('should render Loader properly', async () => {
  await preloadAll()
  render(<Loader />)

  await waitFor(() => {
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
