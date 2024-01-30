import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Link } from 'react-router-dom';
import '../index.css';

const CardPokemon = ({ pokemon }) => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <IonCard
        className="custom-ion-card"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          alt={`Pokemon ${pokemon.name}`}
          src={pokemon.sprites.other.dream_world.front_default}
          className="custom-ion-card-image"
        />
        <IonCardHeader className="custom-ion-card-header">
          <IonCardTitle className="custom-ion-card-title">N° {pokemon.id}</IonCardTitle>
          <IonCardSubtitle className="custom-ion-card-subtitle"> {pokemon.name}</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </Link>
  );
};

export default CardPokemon;