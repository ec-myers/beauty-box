import React, { Component } from 'react';
import './App.scss';
import { getProduct } from '../util/apiCalls';
import { setLipsticks, setMascaras } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount = async() => {
    const { setLipsticks, setMascaras } = this.props;
    try{
      const lipsticks = await getProduct('lipstick');
      setLipsticks(lipsticks);
      const mascaras = await getProduct('mascara');
      setMascaras(mascaras);

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

export const mapStateToProps = ({ lipsticks, mascaras }) => ({
  lipsticks,
  mascaras
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setLipsticks, setMascaras }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
