import { describe, test, expect } from 'vitest';
import { alphabet } from '../src/alphabet';

describe('Test alphabet datastructure', (): void => {
  test('Test metadata', (): void => {
    expect(alphabet['meta']['date']).toBeTypeOf('string');
    expect(alphabet['meta']['majorVersion']).toBeTypeOf('string');
  });

  test('Test available properties', (): void => {
    alphabet.data.forEach((letter): void => {
      expect(letter).ownProperty('letter');
      expect(letter).ownProperty('galactic');
    });
  });
});
