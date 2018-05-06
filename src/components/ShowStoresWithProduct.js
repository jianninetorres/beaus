import React, { Component } from 'react';

class ShowStoresWithProduct extends Component {
    render() {
        return (
            <div className="product-locations">
                <ul>
                {
                    this.props.locations !== '' 
                    ? this.props.locations.map((location) => <li key={location.id}>{location.name}</li>) 
                    : null
                }
                </ul>
            </div>
        );
    }
}

export default ShowStoresWithProduct;