import React from "react";
import "./Cart.css"
import { connect } from 'react-redux';
import CartItem from "../CartItem/CartItem";

const mapStateToProps = state => {
    return { cart: state.cart }
}


const CartRender = ({cart}) => {
    const listCartItems = cart.map((item, index) => <CartItem key={index} item={item}/>);

    return (
        <div className="cart-content">
            <div className="cart-list">
                {listCartItems}
            </div>
        </div>
    )
}

const Cart = connect(mapStateToProps)(CartRender);

export default Cart;
