const KEY = 'f70f0b7a381fef334fa5828909d1878c';
const BASE_URL = 'https://api.themoviedb.org/3/';
const imgSize = 'w500';
const IMG_URL = `https://image.tmdb.org/t/p/${imgSize}/`;
const defaultImage = `${IMG_URL}wwemzKWzjKYJFfCeiB57q3r4Bcm.png`;

function fetchTrendingMovies() {
  return fetch(`${BASE_URL}trending/all/day?api_key=${KEY}`)
    .then(res => res.json())
    .then(data => data.results)
    .then(results =>
      results.filter(movieArray => movieArray.media_type === 'movie'),
    );
}

function fetchMoviesWithQuery(query) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
    .then(res => res.json())
    .then(data => data.results);
}

function fetchMovieDetails(movieId) {
  return fetch(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`,
  ).then(res => res.json());
}

function fetchMovieCast(movieId) {
  return fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  ).then(res => res.json());
}

function fetchMovieReviews(movieId) {
  return fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  )
    .then(res => res.json())
    .then(data => data.results);
}

const theMovieDbAPI = {
  IMG_URL,
  defaultImage,
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};

export default theMovieDbAPI;