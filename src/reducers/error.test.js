import { error } from './error';

describe('error', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = error(undefined, {});

    expect(result).toEqual(expected);
  });
});