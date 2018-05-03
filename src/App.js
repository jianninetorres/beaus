import React, { Component } from 'react';
import './css/app.css';
import Logo from './components/Logo';
import CompanyDescription from './components/CompanyDescription';
import ProductList from './components/ProductList';
import ImageView from './components/ImageView';
import ProductDescription from './components/ProductDescription';


class App extends Component {
  render() {
    return (
      <div class="app-container">
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