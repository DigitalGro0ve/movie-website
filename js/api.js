const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const BASE_URL = "https://api.themoviedb.org/3";
const ROUTE_URL = "/discover/movie";
const QUERY_PARAMS = "?sort_by=popularity.desc&page=1&api_key=" + API_KEY;

export async function getMovies() {
  const fullURL = BASE_URL + ROUTE_URL + QUERY_PARAMS;

  const res = await fetch(fullURL);
  const data = await res.json();

  return data.results;
}

// https://api.themoviedb.org/3/movie/343611?api_key=3fd2be6f0c70a2a598f084ddfb75487c
export async function getMovieInfo(id) {
  const fullURL = BASE_URL + "/movie/" + id + "?&api_key=" + API_KEY;

  const res = await fetch(fullURL);
  const data = await res.json();

  return data;
}
