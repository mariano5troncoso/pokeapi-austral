import React, { useContext } from 'react';

import { usePokemonContext } from '../context/PokemonContext';

const PokemonSearch = () => {
  const { onInputChange } = usePokemonContext();

  const handleSearchChange = (event) => {
    const { value } = event.target;
    onInputChange(value);
  };

  return (
    <div className='filter-by-name'>
      <input
        type='text'
        placeholder='Buscar Pokémon...'
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default PokemonSearch;