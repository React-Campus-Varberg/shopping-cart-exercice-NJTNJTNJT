import React from 'react';

//the cart
function Cart(props) {
    let cartCount = props.stateCartLength;
    return (
      <section>
        Total item in cart: {cartCount}
      </section>
    )
}

export default Cart;