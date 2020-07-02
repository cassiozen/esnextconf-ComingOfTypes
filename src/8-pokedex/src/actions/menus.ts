import type Menus from '../types/Menus';

/**
 * Not real code, just for demonstration purposes
 */

export const setActiveMenu = (activeMenu: Menus | null) => {
  return { type: 'SET_ACTIVE_MENU' as const, activeMenu };
};

export type MenuActions = ReturnType<typeof setActiveMenu>;
