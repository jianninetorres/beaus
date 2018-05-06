import React, { Component } from 'react';
import '../css/product-locations.css';

/* If a location prop has been passed after clicking a product, return the following locations */
class ShowStoresWithProduct extends Component {
    openMap = (address, city) => {
        window.open(`https://www.google.ca/maps/place/${address}+${city}`)
    }

    render() {
        return (
            <div className="product-locations">
                {this.props.locations !== '' 
                    ? <h3>Available at the following locations:</h3> 
                    : null
                }
                <ul>
                {
                    this.props.locations !== '' 
                    ? this.props.locations.map((location) => 
                        <li key={location.id} onClick={
                            () => this.openMap(location.address_line_1, location.city)}>
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