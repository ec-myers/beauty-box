import React from 'react';
import { PropTypes } from 'prop-types';
import Product from '../Product/Product';
import './Container.scss';

const Container = ({productType}) => {
  const productList = productType.map(product => <Product key={product.id}product={product}/>)

  return (
    <main className = 'Container'>
      {productList}
    </main>
  )
}

export default Container;