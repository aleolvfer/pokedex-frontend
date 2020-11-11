import React from 'react';

import { Dropdown } from 'semantic-ui-react'

const url = 'http://localhost:3333/pokemons'

const resposta = fetch(url).then(response => {
  return response.json()
})
.then(test => {

  var poke = { 
    id: test[0].id,
    nome:  test[0].name
  }

  console.log(poke)
  return poke;
})

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
]


const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Select Friend'
    fluid
    selection
    options={friendOptions}
  />
)

export default DropdownExampleSelection;
