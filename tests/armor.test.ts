import { describe, test, expect } from 'vitest';
import { armor } from '../src';

describe('Test armor datastructure', (): void => {
  test('Test metadata', (): void => {
    expect(armor['meta']['date']).toBeTypeOf('string');
    expect(armor['meta']['majorVersion']).toBeTypeOf('string');
  });

  test('Test available properties', (): void => {
    armor.data.forEach((armorProp): void => {
      expect(armorProp).ownProperty('tag');
      expect(armorProp).ownProperty('name');
      expect(armorProp).ownProperty('material');
      expect(armorProp).ownProperty('durability');
      expect(armorProp).ownProperty('defensePoints');
      expect(armorProp).ownProperty('toughness');
    });
  });

  test('Check if armor data is within the value ranges', (): void => {
    armor.data.forEach((armorProp): void => {
      expect(armorProp['durability']).toBeGreaterThanOrEqual(0);
      expect(armorProp['defensePoints']).toBeGreaterThanOrEqual(0);
      expect(armorProp['defensePoints']).toBeLessThanOrEqual(20);
    });
  });
});
