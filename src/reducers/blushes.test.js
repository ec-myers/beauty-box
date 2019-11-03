import { blushes } from './blushes';

describe('blushes', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = blushes(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match case SET_BLUSHES if action type is correct', () => {
    const initialState = [];
    const action = {
      type:'SET_BLUSHES',
      blushes: [{}, {}, {}]
    };
    const result = [{}, {}, {}];

    expect(blushes(initialState, action)).toEqual(result);
  });
});