import { lipsticks } from './lipsticks';

describe('lipsticks', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = lipsticks(undefined, {});

    expect(result).toEqual(expected);
  });
});