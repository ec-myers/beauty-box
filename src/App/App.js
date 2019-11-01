import React, { Component } from 'react';
import './App.scss';
import { getProduct } from '../util/apiCalls';
import { setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount = async() => {
    const { setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows } = this.props;
    try {
      const lipsticks = await getProduct('lipstick');
      setLipsticks(lipsticks);
      const mascaras = await getProduct('mascara');
      setMascaras(mascaras);
      const foundations = await getProduct('foundation');
      setFoundations(foundations);
      const blushes = await getProduct('blush');
      setBlushes(blushes);
      const eyeshadows = await getProduct('eyeshadow');
      setEyeshadows(eyeshadows);
    } catch ({message}){
      console.log(message)
    }
  }

  render() {
    return(
      <p>Beauty Box</p>
    )
  }
}

export const mapStateToProps = ({ lipsticks, mascaras, foundations, blushes, eyeshadows }) => ({
  lipsticks,
  mascaras,
  foundations,
  blushes,
  eyeshadows
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
