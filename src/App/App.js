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
import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router-dom';

export class App extends Component {
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

    return (
      <>
        <Switch>
          <Route exact path='/' render={() => <> <Nav /> <Category /> </>} />
          <Route exact path='/products/:type' render={({match}) => {
            let productType = Object.keys(this.props).find(type => type === match.params.type)
          return <> <Nav /><Container productType={this.props[productType]} toggleCollection={this.toggleCollection} /> </>}}/>
          <Route exact path='/collection' render={() => <> <Nav /> <Container type='collection' collection={this.props.collection} toggleCollection={this.toggleCollection} /></>} />
          <Route exact path='/shopall' render={() => <><Nav /><Container type='shopall' allCategories={allCategories} /> </>} />
          <Route component={PageNotFound} />
        </Switch>
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
  return bindActionCreators({ setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows, setCollection, setError, setLoading }, dispatch) 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  lipsticks: PropTypes.array,
  mascaras: PropTypes.array,
  foundations: PropTypes.array,
  blushes: PropTypes.array,
  eyeshadows: PropTypes.array,
  collection: PropTypes.array,
  setLipsticks: PropTypes.func,
  setMascaras: PropTypes.func,
  setFoundations: PropTypes.func,
  setBlushes: PropTypes.func,
  setEyeshadows: PropTypes.func,
  setCollection: PropTypes.func,
  setError: PropTypes.func,
  setLoading: PropTypes.func,
}
