import * as effectJson from './data/effects.json';
import { DataLayout, Effect } from './types';

export const effects = {
  meta: effectJson['updated'],
  data: effectJson['data'] as Effect[]
} satisfies DataLayout<Effect>;
