export const getProduct = async product => {
  const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}`;
  const response = await fetch(url);
  const data = await response.json();
  const splicedData = data.splice(0, 20);

  const cleanedData = cleanProductData(splicedData);
  if (!response.ok) {
    throw new Error('Could not fetch product');
  }
  return await Promise.all(cleanedData);
}

const cleanProductData = (data) => {
  return data.map(async result => {
    const {id, brand, name, image_link, description, tag_list} = result;
    return { id, brand, name, image_link, description, tag_list}
  });
};