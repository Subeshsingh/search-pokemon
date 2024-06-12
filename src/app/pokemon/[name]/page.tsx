import { fetchPokemon } from "@/actions/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";

const PokemonDetails = async ({ params }: { params: { name: string } }) => {
  const pokemon = await fetchPokemon(params.name);

  return (
    <div className="container mx-auto p-4">
      <nav className="breadcrumb px-2 py-4 bg-white">
        <ul className="flex space-x-2">
          <li>
            <a href="/">Home</a>
          </li>
          <li> / </li>
          <li>{pokemon.name}</li>
        </ul>
      </nav>
      <div>
        <Link className="p-3 font-bold text-secondary-button" href={"/"}>
          {" "}
          {`< Back`}
        </Link>
      </div>
      <div className="flex flex-row justify-center flex-wrap m-auto">
        <div className="max-w-md rounded-t">
          <div className="bg-secondary-button flex justify-center py-8 px-2">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              height={200}
              width={150}
            />
          </div>
          <div className="bg-golden py-4 px-3">
            <p className="font-bold">
              Name : <span className="font-normal">{pokemon.name}</span>
            </p>
            <p className="font-bold">
              Type :
              <span className="font-normal">
                {pokemon.types.reduce(
                  (accum, item) =>
                    accum + `${accum ? ", " : ""}` + item.type.name,
                  ""
                )}
              </span>
            </p>
            <p className="font-bold">
              Stats :
              <span className="font-normal">
                {pokemon.stats.reduce(
                  (accum, item) =>
                    accum + `${accum ? ", " : ""}` + item.stat.name,
                  ""
                )}
              </span>
            </p>
            <p className="font-bold">
              Abilities :
              <span className="font-normal">
                {pokemon.abilities.reduce(
                  (accum, item) =>
                    accum + `${accum ? ", " : ""}` + item.ability.name,
                  ""
                )}
              </span>
            </p>
            <p>
              Soome Moves:{" "}
              <span className="font-normal">
                {pokemon.moves.slice(0, 5).reduce((accum, item, index) => {
                  return accum + `${accum ? ", " : ""}` + item.move.name;
                }, "")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
