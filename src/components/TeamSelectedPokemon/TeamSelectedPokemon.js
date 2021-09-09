import React, { useContext } from 'react';
import Context from '../../context/Context';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function TeamSelectedPokemon({ classes }) {

  const {
    pokemonTeam,
    setPokemonTeam,
    toastActive,
    selectedPokemon,
    setSelectedPokemon
  } = useContext(Context);

  return (
    <div className={`${classes.detailContainer} ${classes.container}`}>
      <p>
        {'PokeDetails'}
      </p>
      {selectedPokemon
        ? <PokemonDetails
          detailContainerWidth={{
            width: '100%',
            marginTop: 40,
          }}
          config={'delete'}
          toastActive={toastActive}
          pokemonTeam={pokemonTeam}
          setPokemonTeam={setPokemonTeam}
          pokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon} />
        : <h5>{'Click on the pokemon to view details'}</h5>}
    </div>
  )
}

export default TeamSelectedPokemon

