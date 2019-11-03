import { blushes } from './blushes';

describe('blushes', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = blushes(undefined, {});

    expect(result).toEqual(expected);
  });
});