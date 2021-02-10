import MovieCardLoader from '@/components/MovieCard/Loader'

const MovieListLoader: React.FC = () => {
  return (
    <>
      {[...Array(16)].map((_, i) => (
        <MovieCardLoader key={i} />
      ))}
    </>
  )
}

export default MovieListLoader
