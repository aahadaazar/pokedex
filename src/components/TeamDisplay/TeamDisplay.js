import { Grid, GridItem } from '@chakra-ui/layout';
import React, { useContext } from 'react';
import Context from '../../context/Context';

function TeamDisplay({ classes }) {

  const {
    pokemonTeam,
    selectedPokemon,
    setSelectedPokemon
  }
    = useContext(Context);

  const onSelectPokemon = pokemon => {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className={`${classes.teamContainer} ${classes.container}`}>
      <p>
        {'Your Pokemon Team'}
      </p>
      {pokemonTeam && pokemonTeam.length > 0
        ? <div className={classes.teamShowcase}>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            {pokemonTeam.map(o => {
              return (
                <GridItem key={o.id} onClick={() => onSelectPokemon(o)} className={`${classes.spriteContainer} ${selectedPokemon && selectedPokemon.id === o.id ? classes.selectedPokemon : ''}`} colSpan={1}>
                  <img src={o.sprite} alt={o.name} />
                </GridItem>
              )
            })}
          </Grid>
        </div>
        : <h5>{'Please add some pokemon to your team!'}</h5>}
    </div>
  )
}

export default TeamDisplay

