// import React from 'react';
// import { context as Context } from './Context';

// function provider(props) {
//   return 'aahad';
// }

// export default provider;

import { useToast } from '@chakra-ui/toast';
import React, { useEffect, useState } from 'react';
import Context from './Context';


function Provider({ children }) {
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState();
  const [pokemonTeam, setPokemonTeam] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const toast = useToast();

  const toastActive = (
    title = "Dummy",
    status = "success",
    position = 'bottom-right',
    duration = 2000,
    isClosable = false) => {
    toast({
      title,
      status,
      position,
      duration,
      isClosable
    });
  }
  useEffect(() => {
    const localStorageTeam = localStorage.getItem('pokeTeam');
    if (!localStorageTeam) {
      localStorage.setItem('pokeTeam', JSON.stringify(pokemonTeam));
    } else {
      setPokemonTeam(JSON.parse(localStorageTeam));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider value={{
      pokemonSearch, setPokemonSearch,
      loading, setLoading,
      pokemonData, setPokemonData,
      pokemonTeam,
      setPokemonTeam,
      toastActive,
      selectedPokemon,
      setSelectedPokemon
    }}>
      {children}
    </Context.Provider>
  )
}

export default Provider;
