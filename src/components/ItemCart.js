import React, { Component } from 'react';

class ItemCart extends Component {
    render() {
        return (
            <>
                <div class="itemCart">
                <h3>Cart</h3>
                <h5>Total Price ${this.props.price}</h5>
                <ul>
                    {/* Unordered list to map over the items we placed into the cart array. Places each mapped item into a list to be displayed.*/}
                    {this.props.cart.map((item, index) => {
                        return (
                            < li key={index} > { item}</li>
                        )

                    })}
                </ul>
                </div>
            </>
        )
    }
}

export default ItemCart;
