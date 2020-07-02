import type { Pokemon } from '../types/Pokemon';
import { catchPokemon } from '../actions/catchEmAll';

const params = {
  catchPokemon: catchPokemon,
  logPokemon: (p: Pokemon) =>
    console.log(`PokeLogger: ${p.name} / ${p.type.toUpperCase()} `),
};

export default function paramMatcher(
  param: keyof typeof params,
  pokemon: Pokemon,
) {
  return params[param](pokemon);
}
