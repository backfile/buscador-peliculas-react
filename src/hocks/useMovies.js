import { fetchMovies } from "../services/fetchMovies";
import { useState, useRef } from "react";

export function useMovies({search}) {
  const [movies, setMovies] = useState(null)
  const lastSearch = useRef("");
  
  const getMovies = () =>{
    if (search){
      if(lastSearch.current != search){
        fetchMovies({ search, setMovies });
        lastSearch.current = search
      }else{
        alert("Evita la misma busqueda")
      }
    }
  }

  return {movies, getMovies};
}
