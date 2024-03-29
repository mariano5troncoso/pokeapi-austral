import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

const Search = () => {
	const location = useLocation();
	const { globalPokemons } = useContext(PokemonContext);
  
	let filteredPokemons = [];
  
	if (location.state) {
		filteredPokemons = globalPokemons.filter(pokemon =>
		  pokemon.name.toLowerCase().includes(location.state.toLowerCase())
		);
	  
	}
	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};
export default Search;