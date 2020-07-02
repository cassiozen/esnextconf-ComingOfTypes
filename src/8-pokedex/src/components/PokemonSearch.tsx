import React from 'react';
import type { Pokemon } from '../types/Pokemon';

type PokemonSearchProps = {
  searchResults: [Pokemon];
};
function PokemonSearch({ searchResults }: PokemonSearchProps) {
  return (
    <div className="pokesearch">
      <ul>
        {searchResults.map((pokemon) => {
          <li>
            <strong>{pokemon.name}</strong> - {pokemon.type.toUpperCase()}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default PokemonSearch;
