import PropTypes from 'prop-types'
import './MovieDetails.css'

export const MovieDetails = ({ movieDetails }) => {
  return (
    movieDetails && (
      <div className='movie-details-wrapper'>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
            width={300}
          />
        </div>
        <div className='movie-info-container'>
          <h1 className='movie-title'>
            {movieDetails.original_title} ({movieDetails.release_date})
          </h1>
          <p>User Score: {movieDetails.vote_average * 10}%</p>
          <h2 className='movie-title'>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2 className='movie-title'>Genres</h2>
          <ul>
            {movieDetails.genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  )
}

MovieDetails.propTypes = {
  movieDetails: PropTypes.object,
}
