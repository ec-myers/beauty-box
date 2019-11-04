import React from 'react';
import { PropTypes } from 'prop-types';
import Product from '../Product/Product';
import './Container.scss';

const Container = ({productType, toggleCollection, type, collection , allCategories}) => {
  if (type === 'collection') {
    let collectionList = collection.map(product => <Product key={product.id} product={product} toggleCollection={toggleCollection} /> );

    return (
      <main className='Container'>
        {collectionList}
      </main>
    )
  } else if (type === 'shopall') {
    let allCategoriesList = allCategories.map(product => <Product key={product.id} product={product} toggleCollection={toggleCollection} />);

    return (
      <main className='Container'>
        {allCategoriesList}
      </main>
    )
  } else {
    const productList = productType.map(product => <Product key={product.id}product={product} toggleCollection={toggleCollection} />);

    return (
      <main className = 'Container'>
        {productList}
      </main>
    )
  }
}

export default Container;

Container.propTypes = {
  productType: PropTypes.array,
  toggleCollection: Proptypes.func,
  type: PropTypes.string,
  collection: PropTypes.array,
  allCategories: PropTypes.array
}