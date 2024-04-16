import * as gamesJson from './data/games.json';
import { DataLayout, Game } from './types';

export const games = {
  meta: gamesJson['updated'],
  data: gamesJson['data'] as Game[]
} satisfies DataLayout<Game>;
