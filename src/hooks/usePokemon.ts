import { useState, useEffect } from "react";

const usePokemon = (type: string, search: string) => {
  const [pokemon, setPokemon] = useState<{ name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
      if (type) {
        url = `https://pokeapi.co/api/v2/type/${type}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      if (type) {
        setPokemon(
          data.pokemon.map((p: { pokemon: { name: string } }) => p.pokemon)
        );
      } else {
        setPokemon(data.results);
      }
      setLoading(false);
    };

    fetchPokemon();
  }, [type]);

  useEffect(() => {
    if (search) {
      setPokemon((prev) =>
        prev.filter((p) => p.name.includes(search.toLowerCase()))
      );
    }
  }, [search]);

  return { pokemon, loading };
};

export default usePokemon;
