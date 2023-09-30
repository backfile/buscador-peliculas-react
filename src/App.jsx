import "./App.css"
import { Movie } from "./components/Movie"
import { useSearch } from "./hocks/useSearch"
import { useMovies } from "./hocks/useMovies";

function App(){
    const { error, search, setSearch } = useSearch();
    const { movies, getMovies } = useMovies({ search });

    
    const handleSubmit = (event) =>{
        event.preventDefault()
        getMovies()
    }

    const handleChange = (event) => {
      setSearch(event.target.value);
    };

    return (
      <div className="page">
        <header>
          <h1 className="pageTitle">Buscador de peliculas</h1>
          <form action="" onSubmit={handleSubmit}>
            <input className="input" style={{border: "solid 3px transparent", borderColor: error? "red" : "transparent"}} onChange={handleChange} value={search} type="text" />
            <button>Buscar</button>
          </form>
          {error && <p className="error">{error}</p>}
        </header>
        <main>
          <Movie movies={movies} />
        </main>
      </div>
    );
}

export default App