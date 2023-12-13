import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IonRouterOutlet, IonRedirect } from '@ionic/react';
import Navigation from './components/Navigation';
import { Home, Pokemon } from '../src/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="pokemon/:id" element={<Pokemon />} />
        <Route path="/Search" element={<Pokemon />} />
        

        
        <Route path="*" element={<IonRedirect to="/" />} />
      </Route>
    </Routes>
  );
};

export default Router;
