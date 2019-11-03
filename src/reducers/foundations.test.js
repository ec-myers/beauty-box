import { foundations } from './foundations';

describe('foundations', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = foundations(undefined, {});

    expect(result).toEqual(expected);
  });
});