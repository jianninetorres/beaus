import React, {Component} from 'react';
import '../css/product-list.css'

class ProductList extends Component {

    onClickListItem = (description, image, alcoholContent, tertiaryCategory) => {
        this.props.clickItem(description, image, alcoholContent, tertiaryCategory);
        console.log(description, image, alcoholContent, tertiaryCategory);
    }

    render() {
        const defaultImage = 'https://cdn.shopify.com/s/files/1/0255/0283/products/new_glassware_2017-3_large.jpg?v=1510001771';

        /* For each beer, return its id and remove "Beau's" from the name if present
        On click, if a tasting note and image are available pass them as a prop to parent, else pass its style and default pic as the description
        */
        const listItems = this.props.beerList.map((beer) => beer.name.match(/beau's/i) 
            ? <li key={beer.id} onClick={
                () => this.onClickListItem(
                        (beer.tasting_note ? beer.tasting_note : beer.style), 
                        (beer.image_url ? beer.image_url : defaultImage),
                        (beer.alcohol_content),
                        (beer.tertiary_category ? beer.tertiary_category : '')
                    )
                } > {beer.name.replace(/beau's/i, '')}</li> 
            
            : <li key={beer.id} onClick={
                () => this.onClickListItem(
                        (beer.tasting_note ? beer.tasting_note : beer.style),
                        (beer.image_url ? beer.image_url : defaultImage),
                        (beer.alcohol_content),
                        (beer.tertiary_category ? beer.tertiary_category : '')
                    )
                } > {beer.name}</li>,
        );
        return (
            <div className="product-list">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

// const ProductList = (props) => {

//     const listItems = props.beerList.map((beer) =>
//         beer.name.match(/beau's/i) 
//         ? <li key={beer.id} onClick={props.onClick} value={beer.tasting_note}>{beer.name.replace(/beau's/i, '')}</li> 
//         : <li key={beer.id} onClick={props.onClick} value={beer.tasting_note}>{beer.name}</li>,
//       );

//       return (
//         <div className="product-list">
//             <ul>
//                 {listItems}
//             </ul>
//         </div>
//     );
// }

export default ProductList;