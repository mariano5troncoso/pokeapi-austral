import React from 'react';
import { PokemonList } from '../components';
import { IonText } from '@ionic/react';

export const Home = () => {
	
	const nameTitle= {
		textAlign: 'center', 
    fontFamily: 'Arial, sans-serif', 
    fontSize: '18px', 
    fontWeight: 'bold', 
    marginTop: '10px',
	}

	return (
		<>
			<IonText style={nameTitle}>
				<h1> POKEAPI AUSTRAL</h1>
			</IonText>
			<PokemonList />

		</>
	);
};
export default Home;