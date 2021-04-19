import{ Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getQueryParams from '../../utils/getQueryParams';
import Search from '../../components/Search/Search';
import theMovieDbAPI from '../../services/themoviedb-api';
import Spinner from '../../components/Spinner/Spinner';
import MovieList from '../../components/MovieList/MovieList';

export default class MoviePage extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    this.setState({ loading: true });

    theMovieDbAPI
      .fetchMoviesWithQuery(query)
      .then(movies => {
        if (movies.length === 0) {
          toast.error('Ничего не найдено...');
        }
        this.setState({ movies });
      })
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        <Search onSubmit={this.handleChangeQuery} />

        {loading ? <Spinner /> : <MovieList movies={movies} />}

        <ToastContainer />
      </div>
    );
  }
}