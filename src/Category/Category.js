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
      <div className='foundation-div'>
        <Link to={ '/products/foundations'}> 
          <button>FOUNDATION</button>
        </Link>
      </div> 
      <div className='blush-div'>
        <Link to='/products/blushes'>
            <button>BLUSH</button>
        </Link>
      </div>
      <div className='mascara-div'>
        <Link to='/products/mascaras'>
          <button>MASCARA</button>
        </Link>
      </div>
      <div className='eyeshadow-div'>
        <Link to='/products/eyeshadows'>
          <button>EYESHADOW</button>
        </Link>
      </div>
      <div className='lipstick-div'>
        <Link to='/products/lipsticks'>
          <button>LIPSTICK</button>
        </Link>
      </div>
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