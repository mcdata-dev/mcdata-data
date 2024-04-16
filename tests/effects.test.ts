import { describe, test, expect, expectTypeOf } from 'vitest';
import { effects } from '../src/effects';

describe('Test effect datastructure', (): void => {
  test('Test metadata', (): void => {
    expect(effects['meta']['date']).toBeTypeOf('string');
    expect(effects['meta']['majorVersion']).toBeTypeOf('string');
  });

  test('Test available properties', (): void => {
    effects.data.forEach((effect): void => {
      expect(effect).ownProperty('tag');
      expect(effect).ownProperty('name');
      expect(effect).ownProperty('minecraftId');
      expect(effect['description']).ownProperty('short');
      expect(effect['description']).ownProperty('long');
      expect(effect).ownProperty('type');
      expect(effect).ownProperty('causes');
    });
  });

  test('Check if effect data is within the value ranges', (): void => {
    effects.data.forEach((effect): void => {
      expectTypeOf(effect['causes']).toBeArray();
      expectTypeOf(effect['type']).toEqualTypeOf<'good' | 'bad'>();
    });
  });
});
