import { useRouter } from 'next/router'
import MovieDetail from '@/containers/MovieDetail'

const MoviesDetailPage: React.FC = () => {
  const router = useRouter()
  const { query } = router
  const movieId = 'detail' in query ? (query.detail as string).split('_')[1] : ''

  return (
    <>
      <MovieDetail movieId={movieId} />
    </>
  )
}

export default MoviesDetailPage
