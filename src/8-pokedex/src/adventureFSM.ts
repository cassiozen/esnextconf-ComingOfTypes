import type { Pokemon } from './types/Pokemon';

function logPokemon(pokemon: Pokemon) {
  console.log('Logging a pokemon', pokemon);
}

logPokemon({
  name: 'Pikachu',
  level: 1,
  type: 'Eletric',
});
