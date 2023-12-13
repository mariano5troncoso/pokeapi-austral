import React, { useState, useEffect } from 'react';
import { useForm } from '../hook/useForm';
import { PokemonContext } from './PokemonContext';
import InfiniteScroll from 'react-infinite-scroll-component'; // Importa InfiniteScroll

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

    const res = await fetch(`${baseURL}pokemon?limit=30&offset=${offset}`); // Limit changed to 30
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

    if (offset + 30 < data.count) {
      setOffset(offset + 30); 
    }
  };
  const getPokemonByID = async id => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	};

  const loadMorePokemons = () => {
    getAllPokemons(); 
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        totalPokemons,
        getPokemonByID,
      }}
    >
      <InfiniteScroll
        dataLength={allPokemons.length} // This is important to prevent re-fetching data on component updates
        next={loadMorePokemons} // Function to call for loading more items
        hasMore={offset < totalPokemons} // Boolean to check if there are more items to load
        
      >
        {children}
      </InfiniteScroll>
    </PokemonContext.Provider>
  );
};
