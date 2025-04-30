import React from "react";
import PokemonCard from "./PokemonCard";
import "../App.css";

const PokemonList = ({ pokemons }) => (
  <div className="pokemon-list">
    {pokemons.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);

export default PokemonList;