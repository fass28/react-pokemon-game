import { usePokemon } from '../hooks/usePokemon'
import { GamePokemon } from '../components/GamePokemon'

export const S1Kanto = () => {
  const pokemonProps = usePokemon({
    range_bottom: 1,
    range_top: 151,
    total: 4
  })

  return (
    <GamePokemon {...pokemonProps} />
  )
}
