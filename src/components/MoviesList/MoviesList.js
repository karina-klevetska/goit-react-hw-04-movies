import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './MoviesList.css'

export const MoviesList = ({ result, location }) => {
  return (
    <>
      <ul className='movies-list'>
        {result &&
          result.map(({ id, original_title, poster_path }) => (
            <li key={id}>
              <Link
                className='movies-link'
                key={id}
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: {
                      location,
                      label: 'Back to list',
                    },
                  },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt='original_title'
                  width={150}
                />
                <p>{original_title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  )
}

MoviesList.propTypes = {
  result: PropTypes.array,
  location: PropTypes.object,
}
