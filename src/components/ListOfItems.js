import React, { Component } from 'react';

class ListOfItems extends Component {
    render() {
        return (
            <>
                <h3>Party Supplies</h3>
                <h3>List Of Items You Can Buy</h3>
                 {/* Create an unordered list of items. The items are mapped from the party list prop. Goes through each item in the party list and puts them into a list tag. There is a button implemented for each item to add that item to the cart.Only adds the name of the item.*/}
                <ul>
                    {this.props.partyList.map((item, index) => {
                        return (
                            <div key={index}>
                                <li>{item.partyitem} {item.price} </li>
                                <button className="cartButton" onClick={() => { this.props.handleChangeCart(item.partyitem) }}>Add to Cart</button>

                            </div>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default ListOfItems;
