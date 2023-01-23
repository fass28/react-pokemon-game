import React from "react";
import ListPokemon from "./ListPokemon";
import Pokemon from "./Pokemon";

export const GamePokemon = ({
  loading,
  pokemons,
  pokemonSeleted,
  hasError,
  showShadow,
  optionSelect,
  validation,

  handleNew,
  comparePokemon,
}) => {
  return (
    <>
      {loading && <h3>loading...</h3>}

      {hasError && <h3>An error happended, please try later...</h3>}

      {!loading && !hasError && (
        <div id="main">
          <h1>Quién es este Pokémon?</h1>

          <Pokemon
            pokemonImage={pokemonSeleted.image}
            showShadow={showShadow}
          />
          <ListPokemon
            pokemons={pokemons}
            onSelected={(pokemonId) => comparePokemon(pokemonId)}
          />

          <hr />

          {optionSelect && (
            <>
              <div id="message" className={validation ? "success" : "error"}>
                <h4>
                  {validation ? "Correcto" : "Oops"}, {pokemonSeleted.name}
                </h4>
              </div>
              <button onClick={handleNew}>Nuevo Juego</button>
            </>
          )}
        </div>
      )}
    </>
  );
};
