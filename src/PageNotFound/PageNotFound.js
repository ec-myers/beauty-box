import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className='PageNotFound'>
      <img src={require('../Images/page-not-found.png')} alt='404 error, page not found'/>
      <h3>Looks like you've gotten lost...</h3>
      <h4>The page you're looking for doesn't exist or has been moved.</h4>
      <Link to='/'><button>GO HOME</button></Link>
    </div>
  )
}

export default PageNotFound;
