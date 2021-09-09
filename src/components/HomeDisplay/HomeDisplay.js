import React, { useContext } from 'react';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import LoadingImage from '../../assets/pokeball-loading.png';
import Context from '../../context/Context';

function HomeDisplay({
  classes,
}) {

  const {
    loading,
    pokemonData,
    pokemonTeam,
    setPokemonTeam,
    toastActive }
    = useContext(Context);

  return (
    <>
      {
        loading
          ? <img id={classes.loader} src={LoadingImage} alt={'loading-pokeball'} />
          : null
      }
      {
        pokemonData
          ? <PokemonDetails config={'add'} toastActive={toastActive} pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam}
            pokemon={pokemonData} />
          : null
      }
    </>
  )
}

export default HomeDisplay

