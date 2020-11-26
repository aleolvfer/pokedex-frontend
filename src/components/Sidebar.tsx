import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import pokebola from '../images/pokebola 1.svg';

import '../styles/components/sidebar.css';

function Sidebar(){
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar"> 
        <header>
          <img src={pokebola} alt="Pokebola"/>

          <div className="ui action input">
            <input type="text" placeholder="Search..."/>
            <button className="ui icon button">
              <i aria-hidden="true" className="search icon"></i>  
            </button>
          </div>
        </header>

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
          <p>create Pokemon</p>
        </footer>

       

        <Link to="/pokemons/" className="create-pokemon">
          <FiArrowLeft size={32} color='#fff'/>
        </Link>
      </aside>
  );
}

export default Sidebar;