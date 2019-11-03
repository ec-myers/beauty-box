import React from 'react';
import './Product.scss';

const Product = ({ product, toggleCollection }) => {
  let tagList = product.tag_list.map(tag => <li>{tag}</li>);
  let { brand, name, description, product_link, id} = product;

  return (
    <div className='Product'>
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
        <button onClick={() => toggleCollection(product)}>ADD</button>
      </footer>
    </div>
  )
}

export default Product;