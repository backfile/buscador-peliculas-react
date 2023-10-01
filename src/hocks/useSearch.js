import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = false;
      return;
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

  return { error, search, setSearch };
}
