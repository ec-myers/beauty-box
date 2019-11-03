import { collection } from './collection';

describe('collection', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = collection(undefined, {});

    expect(result).toEqual(expected);
  });
});