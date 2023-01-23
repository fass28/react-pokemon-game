import { useState } from "react"

function ListPokemon({ pokemons, onSelected }) {
  const [selectedId, setSelectedId] = useState()

  const handleSelect = (pokemonId) => {
    // trigger parent
    onSelected(pokemonId)

    // 
    setSelectedId(pokemonId)
  }

  return (
    <ul className="list-pokemon">
      {
        pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <button
                disabled={selectedId}
                className={'button ' + (pokemon.id === selectedId ? 'active' : '')}
                onClick={() => handleSelect(pokemon.id)}
              >{pokemon.name}</button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListPokemon