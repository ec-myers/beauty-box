import { mascaras } from './mascaras';

describe('mascaras', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = mascaras(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match case SET_MASCARAS if action type is correct', () => {
    const initialState = [];
    const action = {
      type: 'SET_MASCARAS',
      mascaras: [{}, {}, {}]
    };
    const result = [{}, {}, {}];

    expect(mascaras(initialState, action)).toEqual(result);
  });

  it('should not match case SET_MASCARAS if action type is incorrect', () => {
    const initialState = [];
    const action = {
      type: 'WRONG_TYPE',
      mascaras: [{}, {}, {}]
    };

    expect(mascaras(initialState, action)).toEqual(initialState);
  }); 
});