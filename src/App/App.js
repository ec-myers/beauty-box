import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Category from '../Category/Category';
import Container from '../Container/Container';
import { getProduct } from '../util/apiCalls';
import { setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows, setCollection } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';

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

      if (localStorage.getItem('collection')) {
        const { setCollection } = this.props;
        let collection = JSON.parse(localStorage.getItem('collection'));
        setCollection(collection);
      }
    } catch ({message}){
      console.log(message)
    }
  }

  toggleCollection = (product) => {
    const { collection } = this.props;
    collection.map(product => product.id).includes(product.id) ? this.removeProduct(product) : this.addProduct(product);
  }

  addProduct = (product) => {
    const { collection, setCollection } = this.props;
    let newCollection = [...collection, product];
    setCollection(newCollection);
    localStorage.setItem('collection', JSON.stringify(newCollection));
  }

  removeProduct = (product) => {
    const { collection, setCollection } = this.props;
    let newCollection = collection.filter(savedProduct => savedProduct.id !== product.id);
    setCollection(newCollection);
    localStorage.setItem('collection', JSON.stringify(newCollection));
  }

  render() {
    return(
      <>
        <Nav />
        <Route exact path='/' render={() => <Category />} />
        <Route exact path='/products/:type' render={({match}) => {
          let productType = Object.keys(this.props).find(type => type === match.params.type)
        return <Container productType={this.props[productType]} toggleCollection={this.toggleCollection}/>}}/>
        <Route exact path='/collection' render={() => <Container type='collection' collection={this.props.collection}/>} />
      </>
    )
  }
}

export const mapStateToProps = ({ lipsticks, mascaras, foundations, blushes, eyeshadows, collection }) => ({
  lipsticks,
  mascaras,
  foundations,
  blushes,
  eyeshadows,
  collection
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows, setCollection }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
