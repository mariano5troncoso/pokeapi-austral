import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { primerMayuscula } from '../helper/helper';
import '../index.css';
import Fade from 'react-reveal/Fade';
import { IonText } from '@ionic/react';
import { Link } from 'react-router-dom';

const Pokemon = () => {
	const { getPokemonByID } = useContext(PokemonContext);
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});
	const { id } = useParams();

	const fetchPokemon = async (id) => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	};

	const handleMouseOver = (e) => {
		e.currentTarget.style.transform = 'translateY(-5px)';
	};

	const handleMouseOut = (e) => {
		e.currentTarget.style.transform = 'translateY(0)';
	};

	useEffect(() => {
		fetchPokemon(id);
	}, [id, getPokemonByID]);

	return (
		<Fade cascade duration={3000}> {/* Aplica el efecto de desvanecimiento Fade */}
			<main className='ion-padding main-pokemon'>
				{loading ? (
					<Loader />
				) : (
					<div>
						<div className='ion-margin-top ion-text-center'>
							<span className='ion-text-uppercase2 ion-text-bold2'>#{pokemon.id}</span>
							<div className='ion-padding-top'>
								<img
									src={pokemon.sprites.other.dream_world.front_default}
									alt={`Pokemon ${pokemon?.name}`}
									className='pokemon-image'
								/>
							</div>
						</div>

						<div className='card-container'>
							<div className='custom-ion-card2'>
								<h1>{primerMayuscula(pokemon.name)}</h1>
								<div className='ion-text-uppercase ion-padding-top'>
									{pokemon.types.map((type, index) => (
										<span
											key={index}
											className={`pokemon-type ${type.type.name}`}
										>
											{type.type.name}
										</span>
									))}
								</div>
								<div className='ion-padding-top'>
									<div className='pokemon-info'>

										<span>Altura: {pokemon.height}</span>
									</div>
									<div className='pokemon-info'>

										<span>Peso: {pokemon.weight}KG</span>
									</div>
								</div>
							</div>

							<div className='custom-ion-card3'>
								<h1>Estadísticas</h1>
								<div className='pokemon-stats'>
									{pokemon.stats.map((stat, index) => (
										<div className='pokemon-stat' key={index}>
											<span>{stat.stat.name}</span>
											<div className='pokemon-progress-bar'></div>
											<span className='counter-stat'>{stat.base_stat}</span>
										</div>
									))}
								</div>
							</div>

						</div>
						<div >
						<Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
							<IonText className='button-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Volver al inicio</IonText>
							
						</Link>
						</div>

					</div>
				)}
			</main>
		</Fade>
	);
};

export default Pokemon;
