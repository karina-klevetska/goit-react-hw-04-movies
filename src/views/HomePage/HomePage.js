import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { HomeList } from '../../components/HomeList/HomeList'
import { fetchTrendingMovies } from '../../service/ApiService'
import './HomePage.css'

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation()

  useEffect(() => {
    fetchTrendingMovies().then((result) => {
      setMovies(result)
    })
  }, [])

  return (
    <HomeList movies={movies} title={'Trending today'} location={location} />
  )
}

export default HomePage
