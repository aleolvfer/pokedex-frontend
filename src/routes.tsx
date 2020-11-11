import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Pokemons from './pages/Pokemons';

import PokemonsDetails from './pages/Orphanage';
import CreatePokemons from './pages/CreateOrphanage';

function Routes () {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/pokemons" component={Pokemons} />

        <Route path="/pokemons/create" component={CreatePokemons} />
        <Route path="/pokemons/:id" component={PokemonsDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;