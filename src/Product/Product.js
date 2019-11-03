import React from 'react';
import './Product.scss';

const Product = ({ product }) => {
  let tagList = product.tag_list.map(tag => <li>{tag}</li>);

  // addDefaultSrc(e) {
  //   e.target.src = '../Images/default_image.jpg';
  // }
  
  return (
    <div className='Product'>
      <div className='image-div'>
        <object className='product-img' data={product.image_link} type='image/jpg' alt={product.name}>
          <img className='product-img' src={require('../Images/default_image.jpg')} alt='default' />
        </object>
      </div>
      <div className='border-div'></div>
      <h3>{product.brand}</h3>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <ul className='tag-list'>{tagList}</ul>
      <footer>
        <div className='shop-div'>
          < a href={product.product_link}>SHOP</a>
        </div>
        <button>ADD</button>
      </footer>
    </div>
  )
}

export default Product;