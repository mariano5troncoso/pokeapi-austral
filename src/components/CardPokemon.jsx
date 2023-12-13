import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { Link } from 'react-router-dom';


const CardPokemon = ({ pokemon }) => {
  
  const cardStyle = {
    width: '300px',
    height: '300px',
    margin: '10px',
    border: '1px solid #ccc',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    display: 'inline-block',
    verticalAlign: 'top',
    overflow: 'hidden',
    borderRadius: '10px',
    transition: 'transform 0.3s ease', // Agregamos una transición para el efecto hover
  };

  const imgStyle = {
    width: '100%',
    height: '80%',
    margin: '5px',
    display: 'block',
  };

  const nameStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleClick = () => {
    
  };

  return (
    <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <IonCard  style={cardStyle}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    onClick={handleClick}>
      <img
        alt={`Pokemon ${pokemon.name}`}
        src={pokemon.sprites.other.dream_world.front_default}
        style={imgStyle}
      />
      <IonCardHeader>
        <IonCardTitle>N°{pokemon.id}</IonCardTitle>
        <IonCardSubtitle style={nameStyle}> {pokemon.name}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
    </Link>
  );
};

export default CardPokemon;
