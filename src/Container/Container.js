import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Container.scss';

const Container = () => {
  return (
    <main className = 'Container'></main>
  )
}

mapStatetoProps = ({lipsticks, mascaras, foundations, blushes, eyeshadow}) => ({
  lipsticks,
  mascaras,
  foundations,
  blushes,
  eyeshadows
});

export default connect(mapStateToProps)(Container);