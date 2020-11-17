import React from 'react';

/**
 * The cart
 * @param {current cart state} props 
 */
function Cart(props) {
    let cartLength = props.stateCartLength;
    return (
      <section>
        Total item in cart: {cartLength}
      </section>
    )
}

export default Cart;