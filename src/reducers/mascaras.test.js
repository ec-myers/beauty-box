import { mascaras } from './mascaras';

describe('mascaras', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = mascaras(undefined, {});

    expect(result).toEqual(expected);
  });
});