import React, { Component } from 'react';
import './App.scss';
import { getProduct } from '../util/apiCalls';
import { setLipsticks, setMascaras, setFoundations } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount = async() => {
    const { setLipsticks, setMascaras, setFoundations } = this.props;
    try{
      const lipsticks = await getProduct('lipstick');
      setLipsticks(lipsticks);
      const mascaras = await getProduct('mascara');
      setMascaras(mascaras);
      const foundations = await getProduct('foundation');
      setFoundations(foundations);
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

export const mapStateToProps = ({ lipsticks, mascaras, foundations }) => ({
  lipsticks,
  mascaras,
  foundations
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setLipsticks, setMascaras, setFoundations }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
