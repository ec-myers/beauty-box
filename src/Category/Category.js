import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Category.scss';

export const Category = ({ isLoading }) => {
  return (
    <>
    <div className='hero-div'>
      <img src={require('../Images/hero_img_left.jpg')} alt='woman smiling at the camera' />
      <img src={require('../Images/hero_image_4.jpg')} alt='sunglasses and a record on a table' />
      <div className='shop-div'>
        <h3>EXPLORE</h3>
        <h3>BEAUTY</h3>
          <Link to='/shopall'><button>SHOP ALL</button></Link>
      </div>
    </div>
    {isLoading && <img className='loading-img' src={require('../Images/loading.gif')} alt='loading' />}
    {!isLoading && <div className='categories-div'>
      <Link to={ '/products/foundations'}> 
        <button className='foundation-div'>FOUNDATION</button>
      </Link>
      <Link to='/products/blushes'>
        <button className='blush-div'>BLUSH</button>
      </Link>
      <Link to='/products/mascaras'>
        <button className='mascara-div'>MASCARA</button>
      </Link>
      <Link to='/products/eyeshadows'>
        <button className='eyeshadow-div'>EYESHADOW</button>
      </Link>
      <Link to='/products/lipsticks'>
        <button className='lipstick-div'>LIPSTICK</button>
      </Link>
    </div>}
    </>
  )
}

export const mapStateToProps = ({ isLoading }) => ({
  isLoading
});

export default connect(mapStateToProps)(Category);

Category.propTypes = {
  isLoading: PropTypes.bool
}