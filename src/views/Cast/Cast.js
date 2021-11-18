import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { fetchCastMovie } from '../../service/ApiService'
import noImg from '../../images/noImg.png'
import './Cast.css'

export const Cast = ({ movieId }) => {
  const [actors, setActors] = useState()

  useEffect(() => {
    fetchCastMovie(movieId).then((result) => setActors(result.cast))
  }, [movieId])

  return (
    <section>
      <h2 className='isHidden'>Cast</h2>
      <ul className='cast-list'>
        {actors &&
          actors.map(({ id, name, profile_path }) => (
            <li key={id} className='cast-item'>
              <img
                src={
                  !profile_path
                    ? noImg
                    : `https://image.tmdb.org/t/p/w500/${profile_path}`
                }
                alt={name}
                width='100px'
              ></img>
              <h3>{name}</h3>
            </li>
          ))}
      </ul>
    </section>
  )
}

Cast.propTypes = {
  movieId: PropTypes.string,
}
