import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=120");

      const data = await res.json();
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemons(detailedData);
      setFiltered(detailedData);

      const allTypes = new Set();
      detailedData.forEach((p) =>
        p.types.forEach((t) => allTypes.add(t.type.name))
      );
      setTypes(["all", ...Array.from(allTypes)]);
    } catch (err) {
      setError("Failed to fetch Pokémon.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    const filteredData = pokemons.filter((p) => {
      const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesType =
        typeFilter === "all" ||
        p.types.some((t) => t.type.name === typeFilter);
      return matchesName && matchesType;
    });
    setFiltered(filteredData);
  }, [search, typeFilter, pokemons]);


  return (
    <div className="app-container">
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        types={types}
      />
      {loading ? (
        <p className="status-text">Loading Pokémon...</p>
      ) : error ? (
        <p className="status-text error">{error}</p>
      ) : filtered.length === 0 ? (
        <p className="status-text">No Pokémon found.</p>
      ) : (
        <PokemonList pokemons={filtered} />
      )}
    </div>
  );
};

export default App;