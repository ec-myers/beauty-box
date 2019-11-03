import { getProduct } from './apiCalls';

describe('getProduct', () => {
  const mockResponse = [{}, {}, {}, {}];
  const product = 'mascara';
  const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}`;

  it('should call fetch with the correct URL', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    getProduct(product);

    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should return an array of products', () => {
    expect(getProduct(product)).resolves.toEqual(mockResponse);
  });
});