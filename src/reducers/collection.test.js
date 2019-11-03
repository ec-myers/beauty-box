import { collection } from './collection';

describe('collection', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = collection(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match case SET_COLLECTION if action type is correct', () => {
    const initialState = [];
    const action = {
      type: 'SET_COLLECTION',
      collection: [{}, {}, {}]
    };
    const result = [{}, {}, {}];

    expect(collection(initialState, action)).toEqual(result);
  });
});