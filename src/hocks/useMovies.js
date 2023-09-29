import responseMovies from "../mocks/results.json";
import withoutResults from "../mocks/no-results.json";

export function useMovies() {
  const movies = responseMovies.Search;
  return movies;
}
