import React from "react";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: { name: string };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className="p-4 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-xl font-bold">{pokemon.name}</h2>
      </div>
    </Link>
  );
};

export default PokemonCard;
