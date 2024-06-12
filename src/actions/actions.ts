"use server";

import { GetPokeMonByNameResponseDTO } from "@/types/pokemon.types";

export const fetchTypes = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type");
  const types = await res.json();
  return types.results;
};

export const fetchPokemon = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await res.json();
  return pokemon as GetPokeMonByNameResponseDTO;
};
