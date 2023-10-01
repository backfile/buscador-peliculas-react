import { fetchMovies } from "../services/fetchMovies";
import { useState, useRef, useMemo, useEffect, useCallback} from "react";

export function useMovies({search, sort}) {
  const [movies, setMovies] = useState(null)
  const lastSearch = useRef("");
  
  const getMovies = useCallback(({search}) => {
      if (search) {
        if (lastSearch.current != search) {
          fetchMovies({ search, setMovies, sort });
          lastSearch.current = search;
        } else {
          return
        }
      }
    }, []);

  const getSortedMovies = useMemo(()=>{
    const sortedMovies = sort
    ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
    : movies;
    return sortedMovies
  }, [sort, movies])

  return {movies: getSortedMovies, getMovies}
}
