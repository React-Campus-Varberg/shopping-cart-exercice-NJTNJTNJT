import React from 'react';
import Product from '../component/Product';
import Cart from '../component/Cart';

class App extends React.Component {
  
    constructor(props) {
        super(props);
        console.log('App.js');
        this.state = {
          cartBooks: [],
        }
        //this tappar sin referens nedan och vi behöver binda this till funktionen addTodo
        this.addCart = this.addCart.bind(this);
    }
    
    //Add to state cart
    addCart(book) {
      console.log('TO be added to the cart in parent Component');
      console.log(book);
      this.setState((prevState) => ({
        cartBooks: prevState.cartBooks.concat(book)
      }));
  }

    render() {
      var books = [
        {name: 'Harry Potter', price: 20},
        {name: 'American Psycho', price: 25},
      ];
      return (
          <div>
            <h1>Cart</h1>
            <Cart stateCartLength={this.state.cartBooks.length}/>
            <hr></hr>
            <Product name={books[0].name} updateStateCart={this.addCart}/>
            <Product name={books[1].name} updateStateCart={this.addCart}/>            
          </div>
        )
    }
}
export default App;