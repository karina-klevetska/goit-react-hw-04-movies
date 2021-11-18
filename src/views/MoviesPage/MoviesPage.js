import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Form } from '../../components/Form/Form'
import { fetchSearchMovie } from '../../service/ApiService'
import { MoviesList } from '../../components/MoviesList/MoviesList'

const MoviesPage = () => {
  const location = useLocation()
  const history = useHistory()
  const { query } = queryString.parse(location.search)
  const [result, setResult] = useState([])
  const [searchQuery, setSearchQuery] = useState(query || '')

  useEffect(() => {
    if (!searchQuery) {
      return
    }
    fetchSearchMovie(searchQuery)
      .then((result) => {
        if (result.length === 0) {
          alert('no results')
        }
        setResult((prev) => [...prev, ...result])
      })
      .catch((error) => console.log(error))
  }, [searchQuery])

  const onChangeQuery = (query) => {
    setSearchQuery(query)
    history.push({
      ...location,
      search: `query=${query}`,
    })

    if (searchQuery === query) {
      alert('It is the same! Type another name')
      return
    }
  }

  return (
    <>
      <Form handleSearchChange={onChangeQuery} />
      <MoviesList result={result} location={location} />
    </>
  )
}

export default MoviesPage
