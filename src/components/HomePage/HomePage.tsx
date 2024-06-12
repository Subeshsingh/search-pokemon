"use client";
import React, { useEffect, useState } from "react";
import SearchForm from "@/components/SearchForm/SearchForm";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import usePokemon from "@/hooks/usePokemon";
import { fetchTypes } from "@/actions/actions";

export interface PokeMonTypeInterface {
  name: string;
  url?: string;
}

const Home = () => {
  const [filters, setFilters] = useState({ type: "", search: "" });
  const { pokemon, loading } = usePokemon(filters.type, filters.search);
  const [types, setTypes] = useState<PokeMonTypeInterface[] | null>(null);

  useEffect(() => {
    fetchTypes().then((res) => {
      setTypes(res);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchForm
        onSearch={setFilters}
        types={types as PokeMonTypeInterface[]}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {pokemon.map((p) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
