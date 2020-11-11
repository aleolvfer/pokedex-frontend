import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

import DropdownExampleSelection from './Pokemon_Helper';
import CreateOrphanage from './CreateOrphanage'
import PokemonsDetails from './Orphanage';

import '../styles/pages/pokemons.css';

import pokebola from '../images/pokebola 1.svg';

function Pokemons () {
  return (  
    <div id="page-pokemons">
      <aside>
        <header>
          <img src={pokebola} alt="Pokebola"/>

          <span>Show me posts by 
            <div role="listbox" aria-expanded="false" className="ui inline dropdown" tabIndex={0}>
              <div aria-atomic="true" aria-live="polite" role="alert" className="divider text">
                <img src={pokebola} className="ui avatar image" alt=""/>
                Jenny Hess
              </div>
              <i aria-hidden="true" className="dropdown icon"></i>
              <div className="menu transition">
                <div style={{pointerEvents:'all'}}  role="option" aria-checked="true" aria-selected="true" className="active selected item">
                  <img src={pokebola} className="ui avatar image" alt=""/>
                  <span className="text">Jenny Hess</span>
                </div>
                <div style={{pointerEvents:'all'}}  role="option" aria-checked="false" aria-selected="false" className="item">
                  <img src={pokebola} className="ui avatar image" alt=""/>
                  <span className="text">Elliot Fu</span>
                </div>
                <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
                  <img src={pokebola} className="ui avatar image" alt=""/>
                  <span className="text">Stevie Feliciano</span>
                </div>
                <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
                  <img src={pokebola} className="ui avatar image" alt=""/>
                  <span className="text">Christian</span>
                </div>
              </div>
            </div>
          </span>


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
          <PokemonsDetails />
        </div>
    </div>
  );
}

export default Pokemons;