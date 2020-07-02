import type { Pokemon } from '../types/Pokemon';

export function catchPokemon(pokemon: Pokemon) {
  if (pokemon.type !== 'eletric') {
    return { type: 'CATCH' as const, pokemon };
  } else {
    return { type: 'CATCH_FAIL' as const, pokemon };
  }
}

export type CatchEmAllActions = ReturnType<typeof catchPokemon>;
