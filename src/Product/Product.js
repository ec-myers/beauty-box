import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Product.scss';

export const Product = ({ product, toggleCollection, collection }) => {
  // const { collection } = this.props;
  let tagList = product.tag_list.map(tag => <li>{tag}</li>);
  let { brand, name, description, product_link, id} = product;
  let isSaved = collection.map(product => product.id).includes(id) ? 'saved' : '';
  let btnMessage = isSaved ? 'REMOVE' : 'ADD';

  return (
    <div className={`Product ${isSaved}`}>
      <div className='image-div'>
        <object className='product-img' data={product.image_link} type='image/jpg' alt={name}>
          <img className='product-img' src={require('../Images/default_image.jpg')} alt='default' />
        </object>
      </div>
      <div className='border-div'></div>
      <h3>{brand}</h3>
      <h4>{name}</h4>
      <p>{description}</p>
      <ul className='tag-list'>{tagList}</ul>
      <footer>
        <div className='shop-div'>
          < a href={product_link}>SHOP</a>
        </div>
        <button onClick={() => toggleCollection(product)}>{btnMessage}</button>
      </footer>
    </div>
  )
}

export const mapStateToProps = ({collection}) => ({
  collection
});

export default connect(mapStateToProps)(Product);

Product.propTypes = {
  product: PropTypes.object,
  toggleCollection: PropTypes.func,
  collection: PropTypes.array
}