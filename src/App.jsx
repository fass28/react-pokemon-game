import { useState } from 'react'
import Pokemon from './components/Pokemon'
import ListPokemon from './components/ListPokemon'
import './App.css'
import { usePokemon } from './hooks/usePokemon'

function App() {
  const [showShadow, setShowShadow] = useState(true)
  const [optionSelect, setOptionSelected] = useState(false)
  const [validation, setValidation] = useState(false)

  const comparePokemon = (pokemonId) => {
    setOptionSelected(true)
    setShowShadow(false)
    setValidation(pokemonSeleted.id === pokemonId)
  }

  const { loading, pokemons, pokemonSeleted, hasError, handleNew } = usePokemon()

  return (
    <>
      {loading && <h3>loading...</h3>}

      {hasError && <h3>An error happended, please try later...</h3>}

      {!loading && !hasError &&
        <div id="main">
          <h1>Quién es este pokémon?</h1>
          
          <Pokemon pokemonImage={pokemonSeleted.image} showShadow={showShadow} />
          <ListPokemon pokemons={pokemons} onSelected={(pokemonId) => comparePokemon(pokemonId)} />

          <hr />

          {optionSelect && (
            <>
              <div
                id="message"
                className={validation ? 'success' : 'error'}
              >
                <h4>{validation ? 'Correcto' : 'Oops'}, {pokemonSeleted.name}</h4>
              </div>
              <button onClick={handleNew}>Nuevo Juego</button>
            </>
          )}
        </div>
      }
    </>
  )
}

export default App
