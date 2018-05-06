import React, { Component } from 'react';
import './css/app.css';
import Logo from './components/Logo';
import CompanyDescription from './components/CompanyDescription';
import ProductList from './components/ProductList';
import ImageView from './components/ImageView';
import ProductDescription from './components/ProductDescription';

const ACCESS_KEY = 'MDoxYTVlY2Q1ZS00ZjBlLTExZTgtYjEzNS1mYjdmYjJlYzY0OWY6OEEwWkZqVVIyUVBvakNiY0xSYXdqOUt6UXNCb0VGN09PbnBL';

// const beersNotLugTread = null;

class App extends Component {
  state = {
    beerList: [],
    productDescription: 'Since 2006 Beau’s All Natural has been brewing interesting, tasty beers using the best ingredients & local spring water. Our family takes pride in creating unique, wonderful and certified organic craft beer, conceived with honest consideration for the environment and our local communities, and delivered with a sense of friendly relationship.',
    image: 'https://beaus.ca/wp-content/uploads/2014/12/aboutus-aboutbeaus.jpg',
    alcoholContent: '',
    tertiaryCategory: '',
    priceInDollars: ''
  }

  getProducts = async (e) => {
    /* Return drinks available through LCBO that are seasonal */
    const api_call = await fetch(`https://lcboapi.com/products?access_key=${ACCESS_KEY}&q=beaus+all+natural+brewing&per_page=30&where=is_seasonal`);

    /* The json() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON. */
    const data = await api_call.json();
    const products = data.result;
    console.log(products);

    const beersNotLugTread = products.filter(function(product) {
      return !product.name.includes('Mixed Pack');
    });
    console.log('Not Lug Tread', beersNotLugTread);

    this.setState({
      beerList: beersNotLugTread,
    });
    console.log('New Beer List: ', this.state.beerList);
  }

  /* call API on initial render */
  componentWillMount = () => {
    this.getProducts();
  }

  onClickListItem = (description, image, alcoholContent, tertiaryCategory, priceInDollars) => {
    this.setState({
      productDescription: description,
      image: image,
      alcoholContent: `Alcohol content: ${alcoholContent}`,
      tertiaryCategory: `Category: ${tertiaryCategory}`,
      priceInDollars: `Price: $${priceInDollars}`
    })
  }

  render() {
    return (
      <div className="app-container">
        <Logo />
        <CompanyDescription />
        <ProductList 
          beerList={this.state.beerList}
          clickItem={this.onClickListItem} />
        <ImageView image={this.state.image}/>
        <ProductDescription 
          productDescription={this.state.productDescription}
          alcoholContent={this.state.alcoholContent}
          tertiaryCategory={this.state.tertiaryCategory}
          priceInDollars={this.state.priceInDollars} /> 
      </div>
    );
  }
}

export default App;