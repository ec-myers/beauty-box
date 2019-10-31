import React, { Component } from 'react';
import './App.scss';
import { getProduct } from '../util/apiCalls';
import { setLipsticks, setMascaras, setFoundations, setBlushes } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount = async() => {
    const { setLipsticks, setMascaras, setFoundations, setBlushes } = this.props;
    try {
      const lipsticks = await getProduct('lipstick');
      setLipsticks(lipsticks);
      const mascaras = await getProduct('mascara');
      setMascaras(mascaras);
      const foundations = await getProduct('foundation');
      setFoundations(foundations);
      const blushes = await getProduct('blush');
      setBlushes(blushes);
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

export const mapStateToProps = ({ lipsticks, mascaras, foundations, blushes }) => ({
  lipsticks,
  mascaras,
  foundations,
  blushes
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setLipsticks, setMascaras, setFoundations, setBlushes }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
