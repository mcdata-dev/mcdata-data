import * as biomeJson from './data/biomes.json';
import { Biome, DataLayout } from './types';

export const biomes = {
  meta: biomeJson['updated'],
  data: biomeJson['data'] as unknown as Biome[]
} satisfies DataLayout<Biome>;
