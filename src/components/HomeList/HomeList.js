import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './HomeList.css'

export const HomeList = ({ movies, title, location }) => {
  return (
    <section>
      <h1>{title}</h1>
      <ul className='home-list'>
        {movies.map(({ id, original_title, poster_path }) => (
          <li className='home-item' key={id}>
            <Link
              className='home-link'
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: {
                    location,
                    label: 'Back to home',
                  },
                },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={original_title}
                width={150}
              />
              <p>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

HomeList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string,
  location: PropTypes.object,
}
