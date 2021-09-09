import axios from "axios";

const getPokemonByName = (name) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLocaleLowerCase()}`);
}

const getRandomPokemon = () => {
  const rndInt = Math.floor(Math.random() * 898) + 1
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${rndInt}`);
};

export {
  getPokemonByName,
  getRandomPokemon
};