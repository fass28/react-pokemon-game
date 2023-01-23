import { useEffect, useState } from "react";
import { getRandomNumbers } from "../helpers/random";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";
const TOTAL_RANDOM_NUMBERS = 4
const RANGE_BOTTOM_POKEMONS = 150
const RANGE_TOP_POKEMONS = 160

export const usePokemon = () => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSeleted, setPokemonSelected] = useState(null);

  const parsePokemon = ({ id, name, sprites }) => {
    return {
      id,
      name,
      image: sprites.other.dream_world.front_default
    }
  }

  const getPokemonFromApi = async(number) => {
    const resp = await fetch(`${POKEMON_URL}/${number}`)
    const data = await resp.json()
    return data
  }

  const getPokemons = async () => {
    const randomNumbers = getRandomNumbers(TOTAL_RANDOM_NUMBERS, RANGE_BOTTOM_POKEMONS, RANGE_TOP_POKEMONS)

    let randomPokemons = [];
    const pokemonsPromises = []

    for (const number of randomNumbers) {
      pokemonsPromises.push(getPokemonFromApi(number))
    }

    try {
      // data from API
      randomPokemons = await Promise.all(pokemonsPromises)

      // parse data to the app
      randomPokemons = randomPokemons.map((pokemon => parsePokemon(pokemon)))

      setPokemons(randomPokemons);
      setPokemonSelected(
        randomPokemons[Math.floor(Math.random() * randomNumbers.length)]
      );
    } catch(error) {
      setHasError(true)
    } finally {
      setLoading(false);
    }
  };

  const handleNew = () => {
    setLoading(true)
    setHasError(false)
    setPokemons([])
    setPokemonSelected(null)

    getPokemons()
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    // properties
    loading,
    pokemons,
    pokemonSeleted,
    hasError,

    // methods
    handleNew,
  }
};
