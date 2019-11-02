import React from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';

const Category = () => {
  return (
    <>
    <div className='hero-div'>
      <img src={require('../Images/hero_img_left.jpg')} alt='woman smiling at the camera'/>
      <div className='shop-div'>
        <h3>EXPLORE</h3>
        <h3>BEAUTY</h3>
        <button>SHOP ALL</button>
      </div>
        <img src={require('../Images/hero_image_right.jpg')} alt='perfume on a blanket'></img>
    </div>
    <div className='categories-div'>
      <Link to={ '/products/foundations'}> 
        <div className='foundation-div'>
          <h4>FOUNDATION</h4>
        </div> 
      </Link>
      <Link to='/products/blushes'>
        <div className='blush-div'>
          <h4>BLUSH</h4>
        </div>
      </Link>
      <Link to='/products/mascaras'>
        <div className='mascara-div'>
          <h4>MASCARA</h4>
        </div>
      </Link>
      <Link to='/products/eyeshadows'>
        <div className='eyeshadow-div'>
          <h4>EYESHADOW</h4>
        </div>
      </Link>
      <Link to='/products/lipsticks'>
        <div className='lipstick-div'>
          <h4>LIPSTICK</h4>
        </div>
      </Link>
    </div>
    </>
  )
}

export default Category;