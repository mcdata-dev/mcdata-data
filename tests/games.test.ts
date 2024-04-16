import { describe, test, expect, expectTypeOf } from 'vitest';
import { games } from '../src/games';

describe('Test game datastructure', (): void => {
  test('Test metadata', (): void => {
    expect(games['meta']['date']).toBeTypeOf('string');
    expect(games['meta']['majorVersion']).toBeTypeOf('string');
  });

  test('Test available properties', (): void => {
    games.data.forEach((game): void => {
      expect(game).ownProperty('tag');
      expect(game).ownProperty('name');
      expect(game).ownProperty('description');
      expect(game).ownProperty('officialRelease');
      expect(game).ownProperty('editions');
      expect(game).ownProperty('status');
    });
  });

  test('Check if game data is within the value ranges', (): void => {
    games.data.forEach((game): void => {
      expectTypeOf(game['editions']).toBeArray();
      expectTypeOf(game['status']).toEqualTypeOf<'active' | 'upcoming' | 'discontinued'>();
    });
  });
});
