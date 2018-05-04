import React from 'react';
import '../css/product-list.css'

const ProductList = (props) => {
    const listItems = props.beerList.map((beer) =>
        beer.name.match(/beau's/i) 
        ? <li key={beer.id}>{beer.name.replace(/beau's/i, '')}</li> 
        : <li key={beer.id}>{beer.name}</li>,
      );
      return (
        <div className="product-list">
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default ProductList;