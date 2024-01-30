import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';

import { PokemonContext } from '../context/PokemonContext';

const Navigation = () => {
  const { onInputChange } = useContext(PokemonContext);

  return (
    <>
      
      <Outlet />
    </>
  );
};

export default Navigation;