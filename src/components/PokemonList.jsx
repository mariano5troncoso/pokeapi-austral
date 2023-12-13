import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import CardPokemon from './CardPokemon';
import Loader from './Loader';

const PokemonList = () => {
  const { allPokemons, loading, valueSearch } = useContext(PokemonContext);

  // Función para filtrar los Pokémon por nombre
  const filteredPokemons = allPokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(valueSearch.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='card-list-pokemon container'>
          {filteredPokemons && filteredPokemons.length ? (
            <>
              {filteredPokemons.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PokemonList;
