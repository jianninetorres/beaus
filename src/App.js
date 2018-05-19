import React, { Component } from 'react';
import './css/app.css';
import Logo from './components/Logo';
import ProductList from './components/ProductList';
import ImageView from './components/ImageView';
import ProductDescription from './components/ProductDescription';
import logo from'./images/beaus.png';

const ACCESS_KEY = 'MDoxYTVlY2Q1ZS00ZjBlLTExZTgtYjEzNS1mYjdmYjJlYzY0OWY6OEEwWkZqVVIyUVBvakNiY0xSYXdqOUt6UXNCb0VGN09PbnBL';

class App extends Component {
  state = {
    logo,
    beerList: [],
    productName: '',
    productDescription: 'Since 2006 Beau’s All Natural has been brewing interesting, tasty beers using the best ingredients & local spring water. Our family takes pride in creating unique, wonderful and certified organic craft beer, conceived with honest consideration for the environment and our local communities, and delivered with a sense of friendly relationship.',
    image: 'https://beaus.ca/wp-content/uploads/2014/12/aboutus-aboutbeaus.jpg',
    alcoholContent: '',
    tertiaryCategory: '',
    priceInDollars: '',
    productID: '',
    locations: ''
  }

  getProducts = async (e) => {
    /* Return seasonal drinks available through LCBO */
    const api_call = await fetch(`https://lcboapi.com/products?access_key=${ACCESS_KEY}&q=beaus+all+natural+brewing&per_page=30&where=is_seasonal`);

    /* The json() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON. */
    const data = await api_call.json();
    const products = data.result;
    console.log(products);

    const beersNotLugTread = products.filter(function(product) {
      return !product.name.includes('Mixed Pack');
    });
    console.log('Not Lug Tread', beersNotLugTread);

    this.setState((prevState) => {
      return {
        beerList: beersNotLugTread
      }
    })
  }

  getStores = async (productID) => {
    const api_getStores = await fetch(`https://lcboapi.com/stores?access_key=${ACCESS_KEY}&${this.state.productID}`);

    const data_stores = await api_getStores.json();
    const stores = data_stores.result;
    console.log('Stores: ', stores, 'Product ID: ', this.state.productID);

    this.setState((prevState) => {
      return {
        locations: stores
      }
    })
  }

  /* call API on initial render */
  componentWillMount = () => {
    this.getProducts();
  }

  /* Reset states when a product is selected */
  onClickListItem = (name, description, image, alcoholContent, tertiaryCategory, priceInDollars, productID) => {
    this.setState((prevState) => {
      return {
        productName: name,
        productDescription: description,
        image,
        alcoholContent: `Alcohol content: ${alcoholContent}%`,
        tertiaryCategory: `Category: ${tertiaryCategory}`,
        priceInDollars: `Price: $${priceInDollars}`,
        productID,
      }
    })
    /* Get locations of that item */
    this.getStores(this.state.productID);
    console.log('Product ID: ', productID);
  }

  render() {
    return (
      <div className="app-container">
        <Logo 
          logo={this.state.logo}/>
        <ProductList 
          beerList={this.state.beerList}
          clickItem={this.onClickListItem} />
        <ImageView
          image={this.state.image} />
        <ProductDescription
          productName={this.state.productName} 
          productDescription={this.state.productDescription}
          alcoholContent={this.state.alcoholContent}
          tertiaryCategory={this.state.tertiaryCategory}
          priceInDollars={this.state.priceInDollars}
          productID={this.state.productID} 
          locations={this.state.locations} />
      </div>
    );
  }
}

export default App;