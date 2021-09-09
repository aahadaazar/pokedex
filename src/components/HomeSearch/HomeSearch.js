import React, { useContext } from 'react';
import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import Context from '../../context/Context';
import { getPokemonByName, getRandomPokemon } from '../../service.js';
function HomeSearchContainer({
  classes,
}) {

  const {
    pokemonSearch,
    setPokemonSearch,
    loading,
    setLoading,
    toastActive,
    setPokemonData}
    = useContext(Context);

  const filterPokemonData = (unfilteredData) => {
    const { id, name, base_experience: baseExp, sprites } = unfilteredData;
    const type = unfilteredData.types.map(o => o.type.name.charAt(0).toUpperCase() + o.type.name.substr(1)).join(', ');
    const sprite = sprites.front_default;
    setPokemonData({
      id, name, baseExp, type, sprite
    })
  }

  const onSearchClick = () => {
    setLoading(true);
    getPokemonByName(pokemonSearch).then(res => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setTimeout(() => {
        filterPokemonData(res.data);
      }, 1501);
    }, err => {
      setTimeout(() => {
        setLoading(false);
        toastActive(`${err.response.data}!`, 'error');
      }, 1500);
    })
  }

  const onShuffleClick = () => {
    setPokemonSearch('');
    setLoading(true);
    getRandomPokemon().then(res => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setTimeout(() => {
        filterPokemonData(res.data);
      }, 1501);
    }, err => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      toastActive(`${err.response.data}!`, 'error');
    })
  }

  const onSearchChange = (event) => {
    setPokemonSearch(event.target.value);
  }

  return (
    <>
      <div className={classes.contentContainer}>
        <p>Welcome</p>
        <p>Let's start exploring the Pokemon World!</p>
      </div>
      <div className={classes.searchContainer}>
        <InputGroup className={classes.inputGroupContainer}>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="🔎"
          />
          <Input disabled={loading} value={pokemonSearch} className={classes.searchInput} onChange={onSearchChange} placeholder="Find your pokemon!" />
        </InputGroup>
        <Button disabled={pokemonSearch.trim().length < 1 || loading} onClick={onSearchClick} className={classes.searchButton}>
          {'Search'}
        </Button>
        <Button disabled={loading} onClick={onShuffleClick} className={classes.searchButton}>
          {'PokeShuffle!'}
        </Button>
      </div>
    </>
  )
}

export default HomeSearchContainer

