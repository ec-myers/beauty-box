import { lipsticks } from './lipsticks';

describe('lipsticks', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = lipsticks(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match case SET_LIPSTICKS if action type is correct', () => {
    const initialState = [];
    const action = {
      type: 'SET_LIPSTICKS',
      lipsticks: [{}, {}, {}]
    };
    const result = [{}, {}, {}];

    expect(lipsticks(initialState, action)).toEqual(result);
  });

  it('should not match case SET_LIPSTICKS if action type is incorrect', () => {
    const initialState = [];
    const action = {
      type: 'WRONG_TYPE',
      lipsticks: [{}, {}, {}]
    };

    expect(lipsticks(initialState, action)).toEqual(initialState);
  }); 
});