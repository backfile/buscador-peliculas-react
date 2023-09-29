import "./App.css"
import { useMovies } from "./hocks/useMovies"
import { Movie } from "./components/Movie"
import { useEffect, useRef, useState } from "react"


function useSearch(){
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);


  useEffect(() => {

    if (isFirstInput.current){
      isFirstInput.current = false
      return
    }

    if (search === "") {
      setError("No se puede encontrar un string vacio");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda debe contener como minimo 3 caracteres");
      return;
    }
    
    setError(null);
  }, [search]);

  return {error, search, setSearch}

}

function App(){
    const movies = useMovies()
    const {error, search, setSearch} = useSearch()
    

    const handleSubmit = (event) =>{
        event.preventDefault()
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