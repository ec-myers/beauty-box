import * as actions from './index';

describe('actions', () => {
  it('should have a type SET_LIPSTICKS', () => {
    const lipsticks = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_LIPSTICKS',
      lipsticks
    };

    const result = actions.setLipsticks(lipsticks);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_MASCARAS', () => {
    const mascaras = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_MASCARAS',
      mascaras
    };

    const result = actions.setMascaras(mascaras);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_FOUNDATIONS', () => {
    const foundations = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_FOUNDATIONS',
      foundations
    };

    const result = actions.setFoundations(foundations);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_BLUSHES', () => {
    const blushes = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_BLUSHES',
      blushes
    };

    const result = actions.setBlushes(blushes);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_EYESHADOWS', () => {
    const eyeshadows = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_EYESHADOWS',
      eyeshadows
    };

    const result = actions.setEyeshadows(eyeshadows);

    expect(result).toEqual(expectedAction);
  });

  
});