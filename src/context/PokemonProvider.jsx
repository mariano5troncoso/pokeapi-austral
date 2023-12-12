import React, { useState, useEffect } from 'react';
import { useForm } from '../hook/useForm';
import { PokemonContext } from './PokemonContext';

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [totalPokemons, setTotalPokemons] = useState(0);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  });

  const getAllPokemons = async () => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon?limit=50&offset=${offset}`);
    const data = await res.json();

    setTotalPokemons(data.count);

    const promises = data.results.map(async pokemon => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);

    if (offset + 50 < data.count) {
      setOffset(offset + 50);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        totalPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
