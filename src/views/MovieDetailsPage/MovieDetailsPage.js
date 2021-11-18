import { useState, useEffect } from 'react'
import {
  Route,
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router'
import { NavLink } from 'react-router-dom'
import { fetchDetailsMovie } from '../../service/ApiService'
import { MovieDetails } from '../../components/MovieDetails/MovieDetails'
import { Cast } from '../Cast/Cast'
import { Reviews } from '../Reviews/Reviews'
import { ButtonGoBack } from '../../components/ButtonGoBack/ButtonGoBack'
import './MovieDetailsPage.css'

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null)
  let { movieId } = useParams()
  let { url } = useRouteMatch()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    fetchDetailsMovie(movieId).then((result) => setMovieDetails(result))
  }, [movieId])

  const handleBackClick = () => {
    history.push(location?.state?.from?.location ?? '/')
  }

  return (
    <>
      <ButtonGoBack handleBackClick={handleBackClick} location={location} />
      <MovieDetails movieDetails={movieDetails}></MovieDetails>
      <div className='movies-page-wrapper'>
        <NavLink
          className='nav-link'
          activeClassName='is-active'
          to={`${url}/cast`}
        >
          Cast
        </NavLink>
        <NavLink
          className='nav-link nav-item--margin'
          activeClassName='is-active'
          to={`${url}/reviews`}
        >
          Reviews
        </NavLink>
      </div>
      <Route path={`${url}/cast`}>
        {movieDetails && <Cast movieId={movieId} />}
      </Route>
      <Route path={`${url}/reviews`}>
        {movieDetails && <Reviews movieId={movieId} />}
      </Route>
    </>
  )
}

export default MovieDetailsPage
