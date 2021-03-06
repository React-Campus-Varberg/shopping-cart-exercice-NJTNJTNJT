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

    render() {
        return (
            <div>
                <li>
                    <h2>Title: {this.props.name}</h2>
                    <h3>Author: {this.props.author}</h3>
                    <button className={styledBtn.btnAdd} onClick={this.addCart.bind(this, this.props)}>Add to cart</button>
                    <button className={styledBtn.btnRemove} onClick={this.addCart.bind(this, this.props)}>Remove from cart</button>
                </li>
            </div>
        );
    }
}
export default Product;