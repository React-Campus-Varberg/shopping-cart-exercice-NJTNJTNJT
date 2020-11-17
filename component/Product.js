import React, { Component } from 'react';
import styledBtn from '../css/add-to-cart-btn.module.css';


class Product extends Component {    
    constructor(props) {
        super(props);
    }

    addCart(book) {
        console.log('Pass to the parent component');
        this.props.updateStateCart(book);
    }

    removeCart(book) {
        console.log('Pass to the parent component');
        this.props.updateStateCart(book);
    }

    render() {
        return (
            <div>
                <li>
                    {this.props.name} - 
                    <button className={styledBtn.btnAdd} onClick={this.addCart.bind(this, this.props)}>Add to cart</button>
                </li>
            </div>
        );
    }
}
export default Product;