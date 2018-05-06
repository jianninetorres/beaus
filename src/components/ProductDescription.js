import React, { Component } from 'react';
import '../css/product-description.css';
import ShowStoresWithProduct from './ShowStoresWithProduct';


class ProductDescription extends Component {
    render() {   
        return (
            <div className="product-description">
                <p>{this.props.productName}</p>
                <p>{this.props.productDescription}</p>
                <br/>
                <p>{this.props.tertiaryCategory}</p>
                <p>{this.props.alcoholContent}</p>
                <p>{this.props.priceInDollars}</p>
                <ShowStoresWithProduct 
                    locations={this.props.locations}/> 
            </div>
        );
    }
}

export default ProductDescription;