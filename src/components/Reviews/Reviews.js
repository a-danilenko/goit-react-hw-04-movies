import { Component } from 'react';
import PropTypes from 'prop-types';
import themoviedbAPI from '../../services/themoviedb-api';
import { toast } from 'react-toastify';
import Layout from '../Layout/Layout';

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }),
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    themoviedbAPI
      .fetchMovieReviews(movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
  }

  render() {
    const { reviews } = this.state;

    return (
      <Layout>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>There are no reviews</p>
          )}
        </ul>
      </Layout>
    );
  }
}

export default Reviews;