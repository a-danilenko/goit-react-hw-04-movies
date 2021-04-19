import { Component } from 'react';
import themoviedbAPI from '../../services/themoviedb-api';
import { toast } from 'react-toastify';
import Layout from '../Layout/Layout';

export default class MovieCast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    themoviedbAPI
      .fetchMovieCast(movieId)
      .then(results => this.setState({ cast: results.cast }))
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
  }

  render() {
    const { cast } = this.state;

    return (
      <Layout>
        <ul>
          {cast.length > 0 ? (
            cast.map(({ name, profile_path, character, cast_id }) => (
              <li key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `${themoviedbAPI.IMG_URL}${profile_path}`
                      : `${themoviedbAPI.defaultImage}`
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))
          ) : (
            <p>There are no cast</p>
          )}
        </ul>
      </Layout>
    );
  }
}