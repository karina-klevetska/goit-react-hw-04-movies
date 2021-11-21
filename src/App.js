import './App.css'
import { Route } from 'react-router'
import { Switch } from 'react-router'
import { Navigation } from './components/Navigation/Navigation'
import { NotFoundView } from './views/NotFoundView/NotFoundView'
import { lazy, Suspense } from 'react'
import Loader from 'react-loader-spinner'

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "HomePage" */)
)
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */)
)
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  )
)

function App() {
  return (
    <div className='App'>
      <header>
        <Navigation />
      </header>
      <Suspense
        fallback={
          <Loader type='ThreeDots' color='#850000' height={80} width={80} />
        }
      >
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/movies' exact>
            <MoviesPage />
          </Route>
          <Route path='/movies/:movieId'>
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
