import { Component } from 'react';
import themoviedbAPI from '../../services/themoviedb-api';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner/Spinner';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    themoviedbAPI
      .fetchTrendingMovies()
      .then(movieArray => this.setState({ movies: movieArray }))
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className={s.mainContainer}>
        <h1>Trending today</h1>
        {loading ? <Spinner /> : <MovieList movies={movies} />}
      </div>
    );
  }
}