import { GamePokemon } from '../components/GamePokemon'
import { usePokemon } from '../hooks/usePokemon'

export const S3Hoenn = () => {
  const pokemonProps = usePokemon({
    range_bottom: 252,
    range_top: 386,
    total: 6
  })

  return (
    <GamePokemon {...pokemonProps} />
  )
}
