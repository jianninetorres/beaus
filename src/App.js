import React, { Component } from 'react';
import './css/app.css';
import Logo from './components/Logo';
import CompanyDescription from './components/CompanyDescription';
import ProductList from './components/ProductList';
import ImageView from './components/ImageView';
import ProductDescription from './components/ProductDescription';

const ACCESS_KEY = 'MDoxYTVlY2Q1ZS00ZjBlLTExZTgtYjEzNS1mYjdmYjJlYzY0OWY6OEEwWkZqVVIyUVBvakNiY0xSYXdqOUt6UXNCb0VGN09PbnBL';

class App extends Component {
  state = {
    beerName: 'Beaus Beer'
  }

  getProducts = async () => {
    /* The json() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON. */
    const api_call = await fetch(`https://lcboapi.com/products?access_key=${ACCESS_KEY}&q=beaus+all+natural+brewing&per_page=30`);

    const data = await api_call.json();

    const products = data.result;
    console.log(products);

    const beersNotLugTread = products.filter(function(product) {
      return !product.name.includes('Lug Tread');
    });
    console.log('Not Lug Tread', beersNotLugTread);
  }

  getBeerName = () => {
    
  }

  /* call API on initial render */
  componentWillMount = () => {
    this.getProducts();
  }

  render() {
    return (
      <div className="app-container">
        <Logo />
        <CompanyDescription />
        <ProductList />
        <ImageView />
        <ProductDescription /> 
      </div>
    );
  }
}

export default App;