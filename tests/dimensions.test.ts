import { describe, test, expect, expectTypeOf } from 'vitest';
import { dimensions } from '../src';
import { BiomeTag } from '../src/types';

describe('Test dimension datastructure', (): void => {
  test('Test metadata', (): void => {
    expect(dimensions['meta']['date']).toBeTypeOf('string');
    expect(dimensions['meta']['majorVersion']).toBeTypeOf('string');
  });

  test('Test available properties', (): void => {
    dimensions.data.forEach((dimension): void => {
      expect(dimension).ownProperty('tag');
      expect(dimension).ownProperty('name');
      expect(dimension).ownProperty('coordinateScale');
      expect(dimension).ownProperty('ambientLight');
      expect(dimension).ownProperty('fixedTime');
      expect(dimension['altitude']).ownProperty('totalHeight');
      expect(dimension['altitude']).ownProperty('logicalHeight');
      expect(dimension['altitude']).ownProperty('minY');
      expect(dimension['altitude']).ownProperty('maxY');
      expect(dimension['has']).ownProperty('ceiling');
      expect(dimension['has']).ownProperty('raids');
      expect(dimension['has']).ownProperty('skylight');
      expect(dimension['has']).ownProperty('workingRespawnAnchor');
      expect(dimension['has']).ownProperty('workingBed');
      expect(dimension['has']).ownProperty('safePiglins');
    });
  });

  test('Check if dimension data is within the value ranges', (): void => {
    dimensions.data.forEach((dimension): void => {
      expectTypeOf(dimension['biomes']).toEqualTypeOf<BiomeTag[]>();
    });
  });
});
