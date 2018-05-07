import React, { Component } from 'react';
import '../css/product-list.css'

class ProductList extends Component {

    /* On selection of an item, get the following data and return to parent */
    onClickListItem = (name, description, image, alcohol, tertiaryCategory, price, productID) => {
        const priceInDollars = price / 100;
        const alcoholContent = alcohol / 100;
        this.props.clickItem(name, description, image, alcoholContent, tertiaryCategory, priceInDollars, productID);
        console.log(description, image, alcoholContent, tertiaryCategory, priceInDollars, productID);
    }

    render() {
        const defaultImage = 'https://cdn.shopify.com/s/files/1/0255/0283/products/new_glassware_2017-3_large.jpg?v=1510001771';

        /* For each beer, return its id and remove "Beau's" from the name if present.
        On click, get tasting note, image, tertiary category if available, and get alcohol content and price
        */
        const listItems = this.props.beerList.map((beer) => beer.name.match(/beau's/i) 
            ? <li key={beer.id} onClick={
                () => this.onClickListItem(
                        (beer.name),
                        (beer.tasting_note ? beer.tasting_note : beer.style), 
                        (beer.image_url ? beer.image_url : defaultImage),
                        (beer.alcohol_content),
                        (beer.tertiary_category ? beer.tertiary_category : ''),
                        (beer.price_in_cents),
                        (beer.id)
                    )
                } > {beer.name.replace(/beau's/i, '')}</li> 
            
            : <li key={beer.id} onClick={
                () => this.onClickListItem(
                        (beer.name),
                        (beer.tasting_note ? beer.tasting_note : beer.style),
                        (beer.image_url ? beer.image_url : defaultImage),
                        (beer.alcohol_content),
                        (beer.tertiary_category ? beer.tertiary_category : ''),
                        (beer.price_in_cents),
                        (beer.id)
                    )
                } > {beer.name}</li>,
        );
        return (
            <div className="product-list">
                <p>Scroll through our selection below and click to view details.</p>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default ProductList;