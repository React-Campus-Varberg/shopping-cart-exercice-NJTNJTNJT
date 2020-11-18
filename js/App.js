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
        //reference lost, data binding needed
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
        {name: 'Harry Potter and the prisoner of Azkaban', author: "J.K. Rowling", price: 20},
        {name: 'American Psycho', author: "unknown", price: 25},
        {name: '1984', author: "George Orwell", price: 20},
        {name: 'The Picture of Dorian Gray', author: "Oscar Wilde", price: 20},

      ];
      return (
          <div>
            <h1>Cart</h1>
            <Cart stateCartLength={this.state.cartBooks.length}/>
            <hr></hr>
            <Product name={books[0].name} updateStateCart={this.addCart} author={books[0].author}/>
            <Product name={books[1].name} updateStateCart={this.addCart} author={books[1].author}/>   
            <Product name={books[2].name} updateStateCart={this.addCart} author={books[2].author}/>            
            <Product name={books[3].name} updateStateCart={this.addCart} author={books[3].author}/>            
          </div>
        )
    }
}
export default App;