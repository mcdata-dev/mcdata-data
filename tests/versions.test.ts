import { describe, test, expect } from 'vitest';
import { versions } from '../src/versions';

describe('Test version datastructure', (): void => {
  test('Test metadata', (): void => {
    expect(versions['meta']['date']).toBeTypeOf('string');
    expect(versions['meta']['majorVersion']).toBeTypeOf('string');
  });

  test('Test available properties', (): void => {
    versions.data.forEach((version): void => {
      expect(version).ownProperty('version');
      expect(version).ownProperty('major');
      expect(version).ownProperty('majorName');
      expect(version).ownProperty('release');
    });
  });
});
