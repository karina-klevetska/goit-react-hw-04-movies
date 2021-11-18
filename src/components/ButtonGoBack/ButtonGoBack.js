import PropTypes from 'prop-types'
import './ButtonGoBack.css'

export const ButtonGoBack = ({ location, handleBackClick }) => {
  return (
    <button type='button' className='button' onClick={handleBackClick}>
      {location?.state?.from?.label ?? 'Go back'}
    </button>
  )
}

ButtonGoBack.propTypes = {
  location: PropTypes.object,
  handleBackClick: PropTypes.func,
}
