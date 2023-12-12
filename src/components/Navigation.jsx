import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButton } from '@ionic/react';
import { PokemonContext } from '../context/PokemonContext';
import logo from '../assets/Pokédex_logo.png';
import { searchCircle } from 'ionicons/icons';

const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);
  const navigate = useNavigate();

  const onSearchSubmit = e => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <Link to='/' className='logo'>
            <img
              src={logo}
              alt='Logo Pokedex'
            />
          </Link>

          <form onSubmit={onSearchSubmit}>
            <IonSearchbar
              value={valueSearch}
              onIonChange={e => onInputChange(e.detail.value)}
              placeholder='Buscar nombre de pokemon'
              searchIcon={searchCircle}
            />
            <IonButton type='submit' className='btn-search'>Buscar</IonButton>
          </form>
        </IonToolbar>
      </IonHeader>

      <Outlet />
    </>
  );
};

export default Navigation;
