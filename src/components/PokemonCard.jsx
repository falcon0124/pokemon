import React from "react";
import "../App.css";

const typeColors = {
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c850",
  electric: "#f8d030",
  bug: "#a8b820",
  normal: "#a8a878",
  poison: "#a040a0",
  ground: "#e0c068",
  fairy: "#ee99ac",
  fighting: "#c03028",
  psychic: "#f85888",
  rock: "#b8a038",
  ghost: "#705898",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  steel: "#b8b8d0",
  flying: "#a890f0"
};

const PokemonCard = ({ pokemon, index }) => {
    const mainType = pokemon.types[0].type.name;
    return (
      <div
        className="pokemon-card"
        style={{
          "--type-color": typeColors[mainType] || "#ccc",
          animationDelay: `${index * 0.1}s`
        }}
      >
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="floating"
        />
        <h2>{pokemon.name}</h2>
        <p>#{pokemon.id}</p>
        <div className="types">
          {pokemon.types.map((t) => (
            <span key={t.type.name} className="type">
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    );
  };
  

export default PokemonCard;