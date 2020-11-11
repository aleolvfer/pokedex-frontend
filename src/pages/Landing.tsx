import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing () {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
      <img src={logoImg} alt="Logo pokebola"/>

        <main>
          <h1>Catálogo de Pokémons</h1>
          <p>Faça o registro de todos os pokémons que encontrar</p>
        </main>

        <Link to="/pokemons" className="enter-app">
        </Link>
      </div>
    </div>
  );
}

export default Landing;