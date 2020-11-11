import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

// import DropdownExampleSelection from './Pokemon_Helper';

import '../styles/pages/pokemons.css';

import pokebola from '../images/pokebola 1.svg';

function Pokemons () {
  return (  
    <div id="page-pokemons">
      <aside>
        <header>
          <img src={pokebola} alt="Pokebola"/>

          


          <div className="ui action input">
            <input type="text" placeholder="Search..."/>
            <button className="ui icon button">
              <i aria-hidden="true" className="search icon"></i>  
            </button>
          </div>


          <h2>Titulo </h2>
          <p> Um texto alternativo </p>
        </header>

        <footer>
          <p>Outro texto alternativo</p>
        </footer>

       

        <Link to="/" className="create-pokemon">
          <FiPlus size={32} color='#fff'/>
        </Link>
      </aside>

      <div className='Main'>
          
        </div>
    </div>
  );
}

export default Pokemons;