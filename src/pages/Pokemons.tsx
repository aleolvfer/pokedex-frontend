import React from 'react';
import Sidebar from '../components/Sidebar';
import pokemonImage from '../images/charmander.svg';
import '../styles/pokemons.css';
 
export default function Pokemons () {
  
  return (  
    <div id="page-pokemons">
      <Sidebar />

      <main>

        <img src={pokemonImage} alt="Logo pokebola"/>  

        <div className="pokemon-datails">
         <h1>Charmeleon</h1>
        </div>

      </main>
    
    </div>
  );
}

// export default Pokemons;