import React from 'react';
import PokemonContext, { usePokemonContext } from '../context/PokemonContext';
import CardPokemon from './CardPokemon';
import Loader from './Loader';

const PokemonList = () => {
  const { allPokemons, loading } = usePokemonContext();
  const { valueSearch } = React.useContext(PokemonContext);

  const filteredPokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(valueSearch.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='card-list-pokemon container'>
          {filteredPokemonsByName.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default PokemonList;