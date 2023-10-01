import "./App.css"
import { Movie } from "./components/Movie"
import { useSearch } from "./hocks/useSearch"
import { useMovies } from "./hocks/useMovies";
import { useCallback, useState } from "react"
import debounce from "just-debounce-it";

function App(){
    const [sort, setSort] = useState(false);
    const { error, search, setSearch } = useSearch();
    const { movies, getMovies } = useMovies({ search, sort });
    
  
    const handleSubmit = (event) =>{
        event.preventDefault()
        getMovies({search})
    }
    
    const debounceGetMoviesFunction = useCallback(debounce(
      (newSearch) => getMovies({ search: newSearch }),
      600
    ),[]);

    const handleChange = (event) => {
      const newSearch = event.target.value;
      setSearch(newSearch);
      debounceGetMoviesFunction(newSearch)
    };

    const handleSort = () =>{
      if(movies){
        setSort(!sort);
      }else{
        return
      }
    }

    return (
      <div className="page">
        <header>
          <h1 className="pageTitle">Buscador de peliculas</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
            placeholder="Avengers, Matrix"
              className="input"
              style={{
                border: "solid 3px transparent",
                borderColor: error ? "red" : "transparent",
              }}
              onChange={handleChange}
              value={search}
              type="text"
            />
          </form>
          {error && <p className="error">{error}</p>}
          <div className="sort_container">
            <p className="sort_title">Ordenar alfabeticamente por título</p>
            <input
            className="sort_input"
              type="checkbox"
              onChange={handleSort}
              checked={sort}
              name=""
              id=""
            />
          </div>
        </header>
        <main>
          <Movie movies={movies} />
        </main>
      </div>
    );
}

export default App