"use client";
import React, { useState } from "react";
import { PokeMonTypeInterface } from "../HomePage/HomePage";

interface SearchFormProps {
  onSearch: (filters: { type: string; search: string }) => void;
  types: PokeMonTypeInterface[];
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, types }) => {
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ type, search });
  };

  const handleChange = (id: string, value: string) => {
    onSearch({ type, search, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="items-start space-y-4">
      <div className="w-4/12">
        <select
          value={type}
          id="type"
          onChange={(e) => {
            setType(e.target.value);
            handleChange(e.target.id, e.target.value);
          }}
          className="p-2 border rounded w-full"
        >
          <option value="">All Types</option>
          {types?.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-6/12">
        <input
          type="text"
          value={search}
          id="search"
          onChange={(e) => {
            setSearch(e.target.value);
            handleChange(e.target.id, e.target.value);
          }}
          placeholder="Search Pokémon"
          className="p-2 border rounded w-9/12"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white  bg-button-background rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
