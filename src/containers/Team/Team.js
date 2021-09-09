import React, { useContext, useEffect } from 'react';
import classes from './Team.module.css';
import { Wrap, WrapItem } from "@chakra-ui/react"
import TeamDisplay from '../../components/TeamDisplay/TeamDisplay';
import TeamSelectedPokemon from '../../components/TeamSelectedPokemon/TeamSelectedPokemon';
import Context from '../../context/Context';

function Team() {
  const {
    pokemonTeam,
    setPokemonTeam,
    toastActive,
    selectedPokemon,
    setSelectedPokemon
  } = useContext(Context);

  useEffect(() => {
    return () => {
      setSelectedPokemon();
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className={classes.mainTeamContainer}>
      <Wrap flexWrap justify={'center'}>
        <WrapItem flex={0.29} minW={300}>
          <TeamDisplay
            classes={classes}
          />
        </WrapItem>
        <WrapItem flex={0.71} minW={300}>
          <TeamSelectedPokemon
            classes={classes}
            selectedPokemon={selectedPokemon}
            toastActive={toastActive}
            pokemonTeam={pokemonTeam}
            setPokemonTeam={setPokemonTeam}
            setSelectedPokemon={setSelectedPokemon}
          />
        </WrapItem>
      </Wrap>
    </div>
  )
}

export default Team;

