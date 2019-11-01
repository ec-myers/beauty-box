import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return(
    <div className='Nav'>
      <img></img>
      <div className='Nav-links'>
        <NavLink exact to='/'>
          {/* <input type='image'></input> */}
        </NavLink>
        <NavLink to='collection'>Collection
        </NavLink>
      </div>



    </div>
  )
}

export default Nav;