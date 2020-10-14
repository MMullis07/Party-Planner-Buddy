import React, { Component } from 'react';

class Budget extends Component {
    render() {
        return (
            <>
                <div>
                    <h3>Your Total Budget: ${this.props.budget}</h3>
                 </div>
            </>
        )
    }
}

export default Budget;
