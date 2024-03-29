import { eyeshadows } from './eyeshadows';

describe('eyeshadows', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = eyeshadows(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match case SET_EYESHADOWS if action type is correct', () => {
    const initialState = [];
    const action = {
      type: 'SET_EYESHADOWS',
      eyeshadows: [{}, {}, {}]
    };
    const result = [{}, {}, {}];

    expect(eyeshadows(initialState, action)).toEqual(result);
  });

  it('should not match case SET_EYESHADOWS if action type is incorrect', () => {
    const initialState = [];
    const action = {
      type: 'WRONG_TYPE',
      blushes: [{}, {}, {}]
    };

    expect(eyeshadows(initialState, action)).toEqual(initialState);
  });  
});