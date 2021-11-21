import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { fetchReviewsMovie } from '../../service/ApiService'
import noAvatarPic from '../../images/noAvatarPic.png'
import './Reviews.css'

export const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState()

  useEffect(() => {
    fetchReviewsMovie(movieId)
      .then((result) => setReviews(result.results))
      .catch((error) => console.log(error))
  }, [movieId])

  if (reviews && reviews.length === 0) {
    return <p className='no-results'>There are no reviews on this movie</p>
  }

  return (
    <section>
      <h2 className='isHidden'>Reviews</h2>
      <ul className='reviews-list'>
        {reviews &&
          reviews.map(({ id, author_details, updated_at, content }) => (
            <li key={id} className='reviews-item'>
              <div className='reviews-info-wrapper'>
                <img
                  src={
                    author_details.avatar_path === null ||
                    author_details.avatar_path.includes('gravatar')
                      ? noAvatarPic
                      : `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
                  }
                  alt={author_details.username}
                  width='70px'
                />
                <h3>{author_details.username}</h3>
                <p>{updated_at.slice(0, 10)}</p>
                <p>{updated_at.slice(12, 16)}</p>
              </div>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </section>
  )
}

Reviews.propTypes = {
  movieId: PropTypes.string,
}
