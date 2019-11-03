import { foundations } from './foundations';

describe('foundations', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = foundations(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match case SET_FOUNDATIONS if action type is correct', () => {
    const initialState = [];
    const action = {
      type: 'SET_FOUNDATIONS',
      foundations: [{}, {}, {}]
    };
    const result = [{}, {}, {}];

    expect(foundations(initialState, action)).toEqual(result);
  });
});