import React, { Component } from 'react';
import '../css/product-description.css';
import ShowStoresWithProduct from './ShowStoresWithProduct';

const ProductDescription = (props) => {
    return (
        <div className="product-description">
            <h3>{props.productName}</h3>
            <p>{props.productDescription}</p>
            <br/>
            <p>{props.tertiaryCategory}</p>
            <p>{props.alcoholContent}</p>
            <p>{props.priceInDollars}</p>
            <ShowStoresWithProduct 
                locations={props.locations}/> 
        </div>
    );
}

export default ProductDescription;