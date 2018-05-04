import React, { Component } from 'react';
import '../css/product-description.css';

class ProductDescription extends Component {
    render() {
        return (
            <div className="product-description">
                <p>{this.props.productDescription}</p>
                <br/>
                <p>{this.props.tertiaryCategory}</p>
                <p>{this.props.alcoholContent}</p>
            </div>
        );
    }
}

export default ProductDescription;