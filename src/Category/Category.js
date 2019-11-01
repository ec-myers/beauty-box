import React from 'react';
import './Category.scss';

const Category = () => {
  return (
    <div className='hero-div'>
      <img src={require('../Images/hero_img_left.jpg')} alt='woman smiling at the camera'/>
      <div>
      </div>
      <img src={require('../Images/hero_image_right.jpg')} alt='perfume on a blanket'></img>
    </div>
  )
}

export default Category;