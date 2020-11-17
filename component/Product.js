import React, { Component } from 'react';

class Product extends Component {    
    constructor(props) {
        super(props);
    }

    /*
    *
    */
    addCart(book) {
        console.log('Pass to the parent component');
        this.props.updateStateCart(book);
    }

    render() {
        return (
            <div>
                <li>
                    {this.props.name} - 
                    <button onClick={this.addCart.bind(this, this.props)}>Add to cart</button>
                </li>
            </div>
        );
    }
}
export default Product;