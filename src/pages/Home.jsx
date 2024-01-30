import React from 'react';
import { PokemonList , PokemonSearch} from '../components';
import { IonText } from '@ionic/react';
import '../../src/index.css';

export const Home = () => {
  return (
    <div className="ion-background ion-padding">
      <div className="title-container">
        <IonText className="ion-text-uppercase ion-text-bold ion-margin-top">
          <h1>POKEAPI AUSTRAL</h1>
        </IonText>
      </div>
      <div className="subtitle-container">
        <IonText>
          <p>¡Explora el gran universo de Pokémon! Sumérgete en esta increíble enciclopedia de criaturas, conoce sus habilidades, estadísticas y tipos. Desde los legendarios hasta los más comunes, encuentra toda la información que necesitas para convertirte en un maestro Pokémon</p>
        </IonText>
      </div>
      <PokemonSearch />
      <PokemonList />
    </div>
  );
};

export default Home;
