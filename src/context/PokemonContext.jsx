import React, { createContext, useState, useContext } from 'react';

export const PokemonContext = createContext();

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [typeSelected, setTypeSelected] = useState({});
  const [valueSearch, setValueSearch] = useState('');

  const handleCheckbox = (updatedState) => {
    setTypeSelected(updatedState);
  };

  const onInputChange = (value) => {
    setValueSearch(value);
  };

  return (
    <PokemonContext.Provider
      value={{ typeSelected, handleCheckbox, valueSearch, onInputChange }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;