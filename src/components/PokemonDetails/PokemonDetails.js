import { Button } from '@chakra-ui/button';
import React from 'react'
import classes from './PokemonDetails.module.css';


function PokemonDetails({ pokemon, config = null, pokemonTeam, setPokemonTeam, toastActive, detailContainerWidth = {}, setSelectedPokemon }) {

  const addPokemonToTeam = (pokemon) => {
    const tempPokemonTeam = [...pokemonTeam];
    if (tempPokemonTeam.length === 6) {
      toastActive('Team is currently full!', 'error')
    } else if (tempPokemonTeam.map(o => o.id).includes(pokemon.id)) {
      toastActive('This pokemon is already included in your team!', 'error');
    } else {
      tempPokemonTeam.push({ ...pokemon });
      setPokemonTeam(tempPokemonTeam);
      localStorage.setItem('pokeTeam', JSON.stringify(tempPokemonTeam));
      toastActive('Pokemon added to your team successfully!', 'success');
    }
  }

  const deletePokemonFromTeam = (pokemon) => {
    if (pokemonTeam.map(o => o.id).includes(pokemon.id)) {
      const filteredPokemonList = pokemonTeam.filter(o => o.id !== pokemon.id);
      setPokemonTeam(filteredPokemonList);
      localStorage.setItem('pokeTeam', JSON.stringify(filteredPokemonList));
      setSelectedPokemon();
      toastActive('Pokemon has been removed from the team', 'warning');
    }
  }

  return (
    <div style={detailContainerWidth} className={classes.pokemonDetailContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.spriteContainer}>
          <img src={pokemon.sprite} alt={pokemon.name} />
        </div>
        <div className={classes.teamMemberIndicator}>
          {'Team Member'}
        </div>
      </div>
      <div className={classes.rightContainer}>
        <p>{`ID: ${pokemon.id}`}</p>
        <p>{`Name: ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substr(1)}`}</p>
        <p>{`Type: ${pokemon.type}`}</p>
        <p>{`Base Exp: ${pokemon.baseExp}`}</p>
        {config && config === 'add'
          ? <Button onClick={() => { addPokemonToTeam(pokemon); }} className={classes.button}>
            {'Add'}
          </Button>
          : config && config === 'delete'
            ? <Button onClick={() => { deletePokemonFromTeam(pokemon); }} className={classes.button}>
              {'Delete'}
            </Button>
            : null}
      </div>
    </div>
  )
}

export default React.memo(PokemonDetails);

