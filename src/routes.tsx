import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Pokemons from './pages/Pokemons';


function Routes () {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/pokemons" component={Pokemons} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;