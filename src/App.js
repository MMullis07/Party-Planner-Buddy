//Deconstruct Component and import all files necessary for app functionality.
import React, { Component } from 'react';
import './App.css';
import NumberOfGuests from './components/NumberOfGuests';
import Budget from './components/Budget';
import ListOfItems from './components/ListOfItems';
import ItemCart from './components/ItemCart';


//Create class app.
class App extends Component {
  //Create constructor with props.
  constructor(props) {
    super(props)
    //Create state that has 5 different state objects.
    this.state = {
      userGuestInput: "",
      userBudgetInput: "",
      partyList: [
        { partyitem: "1 Balloon", price: "$1" },
        { partyitem: "1 Streamer", price: "$3" },
        { partyitem: "1 Cake", price: "$30" },
        { partyitem: "1 Party Hat", price: "$1" },
        { partyitem: "1 Confetti Cannon", price: "$6" }
      ],
      cart: [],
      price: 0,
    }
  }

  //This method is to set the state of the user input for # of guests and display it on the webpage.
  handleChangeGuest = (e) => {
    this.setState({ userGuestInput: e.target.value })
  }
  
  //This method is to set the state of the user input for their budget and display it on the webpage.
  handleChangeBudget = (e) => {
    this.setState({ userBudgetInput: e.target.value })
  }

  //This method sums all the integers based on which item you add to your cart and sets the state to that summed number. Also sets the cart to hold an array of all the items you placed into your cart.
  handleChangeCart = (currentItem) => {
    let { cart } = this.state
    let { price } = this.state

    if (currentItem === "1 Balloon") {
      price += 1
      this.setState({ price: price })
    }
    else if (currentItem === "1 Streamer") {
      price += 3
      this.setState({ price: price })
    }
    else if (currentItem === "1 Cake") {
      price += 30
      this.setState({ price: price })
    }
    else if (currentItem === "1 Party Hat") {
      price += 1
      this.setState({ price: price })
    }
    else if (currentItem === "1 Confetti Cannon") {
      price += 6
      this.setState({ price: price })
    }
    this.setState({ cart: [...cart, currentItem] })
    console.log(cart)
  }

  //Reset method is used to set cart and price back to nothing. This way, the information displayed on the webpage for cart will be empty.
  reset = () => {
    let { cart } = this.state
    let { price } = this.state
    cart = []
    price = 0
    this.setState({ cart: cart })
    this.setState({ price: price })
    console.log(cart);
  }

  //Render method is all the info we are displaying on the webpage.
  render() {
    return (
      <>
        <div className="header">
          <h1>Party Planner Buddy</h1>
          <p>Welcome to The Party Planner Buddy app in the field below, please enter the number of guests in your upcoming party. Then, select a range out of the price options provided. Once you have done this and click submit a list of our party items will generate. As you shop and click on items you wish to to add to your shopping list, the shopping list will generate on the right hand side with your total price
          </p>
        </div>
        <div>
          <div className="guests">
            {/* Created an input box for # of guests that takes in an integer and will display what you type in. */}
            <h3>Please enter the size of your party below</h3>
            <input
              type="number"
              placeholder="Enter # of guests"
              textarea cols="30"
              value={this.state.userGuestInput}
              onChange={this.handleChangeGuest}
            />
            {/* Prop for the class NumberOfGuests so that file has access to App.js methods */}
            <NumberOfGuests
              numberOfGuests={this.state.userGuestInput}
            />
          </div>
          {/* Created an input box for budget that takes in an integer and will display what you type in. */}
          <div className="budget">
            <h3>Now enter your party's budget</h3>
            <input
              type="number"
              placeholder="Enter budget"
              textarea cols="30"
              value={this.state.userBudgetInput}
              onChange={this.handleChangeBudget}
            />
            {/* Prop for the Budget class so that file has access to App.js methods */}
            <Budget
              budget={this.state.userBudgetInput}
            />
          </div>
          <div className="row">
            <div className="column">
              {/* Prop for the ListOfItems class so that file has access to App.js methods */}
              <ListOfItems
              partyList={this.state.partyList}
              handleChangeCart={this.handleChangeCart}
              />
            </div>
            <div className="column">
                 {/* Prop for the ItemCart class so that file has access to App.js methods */}
              <ItemCart
              price={this.state.price}
              cart={this.state.cart}
              />
               {/* HTML for the reset button */}
              <button className="emptyCart" onClick={this.reset}>Empty Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
