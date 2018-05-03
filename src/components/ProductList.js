import React from 'react';
import '../css/product-list.css'

const ProductList = (props) => {
    return (
        <div className="product-list">
            <ul>
                <li onClick={props.onClickItem}>{props.beerName}</li>
                <li onClick={props.onClickItem}>{props.beerName}</li>
                <li onClick={props.onClickItem}>{props.beerName}</li>
                <li onClick={props.onClickItem}>{props.beerName}</li>
            </ul>
        </div>
    );
}

export default ProductList;