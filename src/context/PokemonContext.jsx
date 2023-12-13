import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [typeSelected, setTypeSelected] = useState({});
  
  const handleCheckbox = (updatedState) => {
    setTypeSelected(updatedState);
  };

  

  return (
    <PokemonContext.Provider value={{ typeSelected, handleCheckbox, getPokemonByID }}>
      {children}
    </PokemonContext.Provider>
  );
};
