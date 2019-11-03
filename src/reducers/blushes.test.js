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

  it('should not match case SET_BLUSHES if action type is incorrect', () => {
    const initialState = [];
    const action = {
      type: 'WRONG_TYPE',
      blushes: [{}, {}, {}]
    };

    expect(blushes(initialState, action)).toEqual(initialState);
  });  
});