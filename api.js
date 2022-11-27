const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

export async function getMovies() {
  const res = await fetch(API_URL);
  console.log(res);
  const data = await res.json();
  console.log(data);

  //   showMovies(data.results);
  return data.results;
}

export async function getMovies3() {
  const res = await fetch(API_URL);
  console.log(res);
  const data = await res.json();
  console.log(data);

  //   showMovies(data.results);
  return data.results;
}
