import React from 'react';
import './Product.scss';

const Product = ({ product }) => {
  let tagList = product.tag_list.map(tag => <li>{tag}</li>);

  // addDefaultSrc(e) {
  //   e.target.src = '../Images/default_image.jpg';
  // }
  
  return (
    <div className='Product'>
      <object className='product-img' data={product.image_link} type='image/jpg' alt={product.name}>
        <img src={require('../Images/default_image.jpg')} alt='default'/>
      </object>
      <h3>{product.brand}</h3>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <ul>{ tagList }</ul>
      <footer>
        <a href={product.product_link}>Shop</a>
        <button>ADD TO COLLECTION</button>
      </footer>
    </div>
  )
}

export default Product;