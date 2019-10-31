import React, { Component } from 'react';
import './App.scss';
import { getProduct } from '../util/apiCalls';
import { setLipsticks } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount = async() => {
    const { setLipsticks } = this.props;
    try{
      const lipsticks = await getProduct('lipstick');
      console.log(lipsticks)
      setLipsticks(lipsticks);

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

export const mapStateToProps = ({ lipsticks }) => ({
  lipsticks
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setLipsticks }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
