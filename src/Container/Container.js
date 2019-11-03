import React from 'react';
import { PropTypes } from 'prop-types';
import Product from '../Product/Product';
import './Container.scss';

const Container = ({productType, toggleCollection, type, collection}) => {
  if (type === 'collection') {
    return (collection.map(product => <Product key={product.id} product={product} toggleCollection={toggleCollection} /> ))
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