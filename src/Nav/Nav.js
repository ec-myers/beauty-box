import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className='Nav'>
      <NavLink exact to='/'>
        <h3>BEAUTYBOX</h3>
      </NavLink>
      <div className='Nav-links'>
        <NavLink to='/collection'>YOUR COLLECTION
        </NavLink>
      </div>
    </div>
  )
}

export default Nav;