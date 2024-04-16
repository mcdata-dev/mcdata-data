import { describe, test, expect, expectTypeOf } from 'vitest';
import { biomes } from '../src';
import { Dimension, Precipitation, StructureTag } from '../src/types';

describe('Test biome datastructure', (): void => {
  test('Test metadata', (): void => {
    expect(biomes['meta']['date']).toBeTypeOf('string');
    expect(biomes['meta']['majorVersion']).toBeTypeOf('string');
  });

  test('Test available properties', (): void => {
    biomes.data.forEach((biome): void => {
      expect(biome).ownProperty('tag');
      expect(biome).ownProperty('name');
      expect(biome).ownProperty('category');
      expect(biome).ownProperty('temperature');
      expect(biome).ownProperty('rain');
      expect(biome).ownProperty('dimension');
      expect(biome).ownProperty('rarity');
      expect(biome).ownProperty('structures');
      expect(biome).ownProperty('precipitation');
    });
  });

  test('Check if biome data is within the value ranges', (): void => {
    biomes.data.forEach((biome): void => {
      expect(biome['rain']).toBeGreaterThanOrEqual(0);
      expect(biome['rain']).toBeLessThanOrEqual(1);

      expectTypeOf(biome['structures']).toEqualTypeOf<StructureTag[]>();
      expectTypeOf(biome['dimension']).toEqualTypeOf<Dimension>();
      expectTypeOf(biome['precipitation']).toEqualTypeOf<Precipitation>();
    });
  });
});
