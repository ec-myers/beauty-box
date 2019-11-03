import { eyeshadows } from './eyeshadows';

describe('eyeshadows', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = eyeshadows(undefined, {});

    expect(result).toEqual(expected);
  });
});