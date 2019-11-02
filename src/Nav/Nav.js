import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return(
    <div className='Nav'>
      <h3>BEAUTYBOX</h3>
      <div className='Nav-links'>
        <NavLink exact to='/'>
          {/* <input type='image'></input> */}
        </NavLink>
        <NavLink to='collection'>YOUR COLLECTION
        </NavLink>
      </div>



    </div>
  )
}

export default Nav;