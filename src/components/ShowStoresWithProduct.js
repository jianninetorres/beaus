import React, { Component } from 'react';

/* Once a location prop has been passed after clicking a product, return the following locations*/
class ShowStoresWithProduct extends Component {
    render() {
        return (
            <div className="product-locations">
                <ul>
                {
                    this.props.locations !== '' 
                    ? this.props.locations.map((location) => 
                        <li key={location.id}>
                            {location.name}
                            <br />
                            {location.address_line_1}
                            <br />
                            {location.city}
                            <br />
                            {location.postal_code}
                            <br />
                            {location.telephone}
                        </li>) 
                    : null
                }
                </ul>
            </div>
        );
    }
}

export default ShowStoresWithProduct;