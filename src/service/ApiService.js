import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '5014c2df88504a6e11ffa7897f544a2c'

export const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then((result) => result.data.results)
    .catch((error) => console.log(error))
}

export const fetchSearchMovie = (searchQuery) => {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US`
    )
    .then((result) => result.data.results)
    .catch((error) => console.log(error))
}

export const fetchDetailsMovie = (id) => {
  return axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export const fetchCastMovie = (id) => {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export const fetchReviewsMovie = (id) => {
  return axios
    .get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => response.data)
    .catch((error) => console.log(error))
}
