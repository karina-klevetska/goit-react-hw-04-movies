import PropTypes from 'prop-types'
import { useState } from 'react'
import './Form.css'

export const Form = ({ handleSearchChange }) => {
  const [query, setQuery] = useState('')

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) {
      alert('Please type your query')
      return
    }

    handleSearchChange(query)
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor='input'></label>
      <input
        type='text'
        id='input'
        onChange={handleInputChange}
        placeholder={'Type movie name'}
        className='input'
      ></input>
      <button type='submit' className='button'>
        Search
      </button>
    </form>
  )
}

Form.propTypes = {
  handleSearchChange: PropTypes.func,
}
