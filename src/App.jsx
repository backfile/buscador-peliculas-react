import "./App.css"
import { Movie } from "./components/Movie"
import { useSearch } from "./hocks/useSearch"
import { useMovies } from "./hocks/useMovies";
import { useState } from "react"

function App(){
    const [sort, setSort] = useState(false);
    const { error, search, setSearch } = useSearch();
    const { movies, getMovies } = useMovies({ search, sort });
    
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        getMovies({search})
    }

    const handleChange = (event) => {
      setSearch(event.target.value);
    };

    const handleSort = () =>{
      if(movies){
        setSort(!sort);
      }else{
        alert("No hay peliculas para ordenar")
      }
      
    }

    return (
      <div className="page">
        <header>
          <h1 className="pageTitle">Buscador de peliculas</h1>
          <form action="" onSubmit={handleSubmit}>
            <input className="input" style={{border: "solid 3px transparent", borderColor: error? "red" : "transparent"}} onChange={handleChange} value={search} type="text" />
            <input type="checkbox" onChange={handleSort} checked={sort} name="" id="" />
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