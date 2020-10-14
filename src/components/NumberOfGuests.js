import React, { Component } from 'react';

class NumberOfGuests extends Component {
    render() {
        return (
            <div>
                {/* Displays number of guests based on what you type into the input box in app.js. */}
                <h3>Total Number Of Guests: {this.props.numberOfGuests}</h3>
            </div>
        )
    }
}

export default NumberOfGuests;
