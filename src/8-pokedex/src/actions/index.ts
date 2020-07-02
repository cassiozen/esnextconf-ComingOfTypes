import type { AnnouncerActions } from './announcer';
import type { AuthActions } from './auth';
import type { CatchEmAllActions } from './catchEmAll';
import type { MenuActions } from './menus';

export type Actions =
  | AnnouncerActions
  | AuthActions
  | CatchEmAllActions
  | MenuActions;
