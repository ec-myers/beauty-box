import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Category from '../Category/Category';
import Container from '../Container/Container';
import PageNotFound from '../PageNotFound/PageNotFound';
import { getProduct } from '../util/apiCalls';
import { setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows, setCollection, setError, setLoading } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount = async() => {
    const { setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows, setError, setLoading } = this.props;
    try {
      setLoading(true);
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
      setLoading(false)

      if (localStorage.getItem('collection')) {
        const { setCollection } = this.props;
        let collection = JSON.parse(localStorage.getItem('collection'));
        setCollection(collection);
      }
    } catch ({message}){
      setError(message)
      setLoading(false)
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
    const { foundations, mascaras, eyeshadows, blushes, lipsticks } = this.props;
    let allCategories = [...foundations, ...mascaras, ...eyeshadows, ...blushes, ...lipsticks];
    console.log('allCategories', allCategories)
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <Category />} />
          <Route exact path='/products/:type' render={({match}) => {
            let productType = Object.keys(this.props).find(type => type === match.params.type)
          return <Container productType={this.props[productType]} toggleCollection={this.toggleCollection}/>}}/>
          <Route exact path='/collection' render={() => <Container type='collection' collection={this.props.collection} />} />
          <Route exact path='/shopall' render={() => <Container type='shopall' allCategories={allCategories} />} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    )
  }
}

export const mapStateToProps = ({ lipsticks, mascaras, foundations, blushes, eyeshadows, collection, error, isLoading }) => ({
  lipsticks,
  mascaras,
  foundations,
  blushes,
  eyeshadows,
  collection,
  error,
  isLoading
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows, setCollection, setError, setLoading }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
