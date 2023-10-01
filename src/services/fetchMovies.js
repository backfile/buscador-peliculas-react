export const fetchMovies = ({ search, setMovies, sort }) => {
  const KEY = "77e1b1f9";
  
  fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${search}`)
    .then((data) => data.json())
    .then((json) => {
      setMovies(json.Search);
    });
};


