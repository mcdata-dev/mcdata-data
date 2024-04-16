import { describe, test, expect } from 'vitest';
import { colors } from '../src';

describe('Test color datastructure', (): void => {
  test('Test metadata', (): void => {
    expect(colors['meta']['date']).toBeTypeOf('string');
    expect(colors['meta']['majorVersion']).toBeTypeOf('string');
  });

  test('Test available properties', (): void => {
    colors.data.forEach((color): void => {
      expect(color).ownProperty('tag');
      expect(color).ownProperty('name');
      expect(color).ownProperty('chatCode');
      expect(color).ownProperty('motdCode');
      expect(color).ownProperty('hexCode');
    });
  });
});
