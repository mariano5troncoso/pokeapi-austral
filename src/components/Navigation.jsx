import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IonHeader, IonToolbar, IonButton } from '@ionic/react';
import { PokemonContext } from '../context/PokemonContext';
import logo from '../assets/Pokédex_logo.png';
import { searchCircle } from 'ionicons/icons';
import { IonSearchbar } from '@ionic/react';


const Navigation = () => {
  
  

  return (
    <>
      

      <Outlet />
    </>
  );
};

export default Navigation;
