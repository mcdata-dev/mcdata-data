import * as armorJson from './data/armor.json';
import { Armor, DataLayout } from './types';

export const armor = {
  meta: armorJson['updated'],
  data: armorJson['data'] as Armor[]
} satisfies DataLayout<Armor>;
