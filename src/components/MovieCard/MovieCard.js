import PropTypes from 'prop-types';
import themoviedbAPI from '../../services/themoviedb-api';

const MovieCard = ({ movie }) => {
  const {
    backdrop_path,
    genres,
    overview,
    release_date,
    title,
    name,
    vote_average,
  } = movie;

  return (
    <>
      <div>
        <img
          src={
            backdrop_path
              ? `${themoviedbAPI.IMG_URL}${backdrop_path}`
              : `${themoviedbAPI.defaultImage}`
          }
          alt={title || name}
        />

        <div>
          <h1>{title || name}</h1>
          {vote_average > 0 && (
            <p>
              <span>User Score:</span> {vote_average * 10}%
            </p>
          )}

          {release_date && (
            <p>
              <span>Release date:</span> {release_date}
            </p>
          )}
          {overview && (
            <>
              <h2>Overview</h2>
              <p>{overview}</p>
            </>
          )}

          {genres.length > 0 && (
            <>
              <h2>Genres</h2>
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>
                    {name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    backdrop_path: themoviedbAPI.defaultImage.string,
  }),
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default MovieCard;