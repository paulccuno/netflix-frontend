const server_url = process.env.REACT_APP_MOVIES_SERVER;
const api_key = process.env.REACT_APP_MOVIES_API_KEY;
export const image_server = process.env.REACT_APP_IMAGE_SERVER;

export const getGenres = async () => {
  const url = `${server_url}/genre/movie/list?api_key=${api_key}`;
  const response = await fetch(url);
  return await response.json();
};

export const getMovies = async (genreId = 0) => {
  const url = `${server_url}/discover/movie?api_key=${api_key}&with_genres=${genreId}`;
  const response = await fetch(url);
  return await response.json();
};

export const getMovieById = async (id = 0) => {
  const url = `${server_url}/movie/${id}?api_key=${api_key}`;
  const response = await fetch(url);
  return await response.json();
};

export const getMovieVideos = async (id = 0) => {
  const url = `${server_url}/movie/${id}/videos?api_key=${api_key}`;
  const response = await fetch(url);
  return await response.json();
};

export const getTopMovies = async () => {
  const url = `${server_url}/movie/top_rated?api_key=${api_key}&language=es-es`;
  const response = await fetch(url);
  return await response.json();
};
