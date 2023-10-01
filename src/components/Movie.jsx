function ListOfMovies({movies}){
    return (
      <ul className="container">
        {movies.map((movie) => (
          <li className="movie" key={movie.imdbID}>
            <h3 className="title">{movie.Title}</h3>
            <img className="poster" src={movie.Poster} alt="" />
            <p className="year">{movie.Year}</p>
          </li>
        ))}
      </ul>
    );
}

function NoResults(){
    return <p className="noResults">No se encontraron resultados</p>
}

export function Movie({movies}){
    const hasMovies = movies?.length > 0;

    return(
        hasMovies
            ? <ListOfMovies movies={movies}/>
            : <NoResults/>
    )
}