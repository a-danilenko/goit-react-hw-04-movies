import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import Navi from './components/Navi/Navi';
import Spinner from './components/Spinner/Spinner';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage'),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage'),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage'),
);

const App = () => (
  <>
    <Navi />

    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </>
);

export default App;
