import type { Actions } from './actions';
import type { Pokemon } from './types/Pokemon';

const initialState = {
  announcerMsg: '',
  pokemons: [],
  activeMenu: undefined,
};

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'ANNOUNCE_MESSAGE':
      return { ...state, announcerMsg: action.message };
    case 'CLEAR_MESSAGE':
      return { ...state, announcerMsg: '' };
    case 'USER_LOGGED':
      // TODO
      return;
    case 'CATCH':
      return { ...state, pokemons: [...state.pokemons, action.pokemon] };
    case 'SET_ACTIVE_MENU':
      return { ...state, activeMenu: action.activeMenu };
  }
};
