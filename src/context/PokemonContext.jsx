import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [typeSelected, setTypeSelected] = useState({});
  
  const handleCheckbox = (updatedState) => {
    setTypeSelected(updatedState);
  };

  const getPokemonByID = async id => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	};

  return (
    <PokemonContext.Provider value={{ typeSelected, handleCheckbox, getPokemonByID }}>
      {children}
    </PokemonContext.Provider>
  );
};
