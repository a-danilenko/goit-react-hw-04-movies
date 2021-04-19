import { Component } from 'react';
import Proptypes from 'prop-types';
import movieApi from '../../servises/movies-api';
import s from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.shape({ movieId: Proptypes.string.isRequired }),
      path: Proptypes.string.isRequired,
      url: Proptypes.string.isRequired,
    }).isRequired,
  };

  state = {
    cast: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const movieID = match.params.movieId;

    this.getCredits(movieID);
  }

  getCredits = id => {
    movieApi.fetchCredits(id).then(cast => {
      this.setState({
        cast,
      });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <section className={s.cast}>
        <h2>Cast</h2>
        {cast && (
          <ul className={s.castList}>
            {cast.map(person => (
              <li key={person.cast_id} className={s.castList__item}>
                <object
                  data={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  type="image/png"
                  width="120"
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/12/04/03/mask-1587566_1280.png"
                    alt="actor"
                    width="140"
                  />
                </object>
                <p className={s.castList__name}>{person.name}</p>
                <p>
                  <span>Character:</span> {person.character}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}
export default Cast;