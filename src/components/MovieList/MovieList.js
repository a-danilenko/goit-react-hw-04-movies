import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import s from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={s.movieList}>
      {movies &&
        movies.map(({ id, title, name }) => (
          <li key={id} className={s.movieItem}>
            <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title || name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default withRouter(MovieList);