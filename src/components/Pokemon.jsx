function Pokemon({ pokemonImage, showShadow }) {
  return (
    <img src={pokemonImage} alt="pokemon image" className={'pokemon-image ' + (showShadow ? 'dark' : '')} />
  )
}

export default Pokemon