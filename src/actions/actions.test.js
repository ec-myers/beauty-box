import * as actions from './index';

describe('actions', () => {
  it('should have a type SET_LIPSTICKS', () => {
    const lipsticks = [
      {
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list:['tag1', 'tag2']
      },
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      }];
    const expectedAction = {
      type: 'SET_LIPSTICKS',
      lipsticks
    };

    const result = actions.setLipsticks(lipsticks);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_MASCARAS', () => {
    const mascaras = [
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      },
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      }];
    const expectedAction = {
      type: 'SET_MASCARAS',
      mascaras
    };

    const result = actions.setMascaras(mascaras);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_FOUNDATIONS', () => {
    const foundations = [
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      },
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      }];
    const expectedAction = {
      type: 'SET_FOUNDATIONS',
      foundations
    };

    const result = actions.setFoundations(foundations);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_BLUSHES', () => {
    const blushes = [
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      },
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      }];
    const expectedAction = {
      type: 'SET_BLUSHES',
      blushes
    };

    const result = actions.setBlushes(blushes);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_EYESHADOWS', () => {
    const eyeshadows = [
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      },
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      }];
    const expectedAction = {
      type: 'SET_EYESHADOWS',
      eyeshadows
    };

    const result = actions.setEyeshadows(eyeshadows);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_COLLECTION', () => {
    const collection = [
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      },
      {
        id: 1047,
        brand: "colourpop",
        name: "Blotted Lip",
        image_link: "https://file.com",
        product_link: "https://colourpop.com/",
        description: "Description",
        tag_list: ['tag1', 'tag2']
      }];
    const expectedAction = {
      type: 'SET_COLLECTION',
      collection
    };

    const result = actions.setCollection(collection);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_ERROR', () => {
    const error = 'Everything is broken';
    const expectedAction = {
      type: 'SET_ERROR',
      error
    };

    const result = actions.setError(error);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_LOADING', () => {
    const isLoading = true;
    const expectedAction = {
      type: 'SET_LOADING',
      isLoading
    };

    const result = actions.setLoading(isLoading);

    expect(result).toEqual(expectedAction);
  });
});