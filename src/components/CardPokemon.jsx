import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const CardPokemon = ({ pokemon }) => {
  const cardStyle = {
    width: '300px', 
    height: '300px', 
    margin: '10px',
    border: '1px solid #ccc',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    verticalAlign: 'top',
    overflow: 'hidden', // Oculta el contenido que se sale del contenedor
  };

  const imgStyle = {
    width: '250px', // La imagen ocupará todo el espacio del contenedor
	margin: '5px',
    height: 'auto', 
    display: 'block', // Asegura que no haya espacio adicional alrededor de la imagen
   
  };

  const typeStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  

  const getTypeSpecificStyle = (type) => {
    switch (type.type.name) {
      case 'grass':
        return {
          backgroundColor: 'green',
          color: 'white',
        };
      case 'fire':
        return {
          backgroundColor: 'red',
          color: 'white',
        };
      default:
        return {};
    }
  };

  return (
    <IonCard style={cardStyle}>
      <img
        alt={`Pokemon ${pokemon.name}`}
        src={pokemon.sprites.other.dream_world.front_default}
        style={imgStyle}
      />
      <IonCardHeader>
        <IonCardTitle>N°{pokemon.id}</IonCardTitle>
        <IonCardSubtitle> {pokemon.name}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default CardPokemon;
