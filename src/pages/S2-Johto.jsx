import { GamePokemon } from '../components/GamePokemon'
import { usePokemon } from '../hooks/usePokemon'

export const S2Johto = () => {
  const pokemonProps = usePokemon({
    range_bottom: 152,
    range_top: 250,
    total: 5
  })

  return (
    <GamePokemon {...pokemonProps} />
  )
}
