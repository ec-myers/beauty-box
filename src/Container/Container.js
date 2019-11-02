import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Product from '../Product/Product';
import './Container.scss';

const Container = ({productType}) => {
  const productList = productType.map(product => <Product product={product}/>)

  return (
    <main className = 'Container'>
      {productList}
    </main>
  )
}

export const mapStateToProps = ({lipsticks, mascaras, foundations, blushes, eyeshadows}) => ({
  lipsticks,
  mascaras,
  foundations,
  blushes,
  eyeshadows
});

export default connect(mapStateToProps)(Container);