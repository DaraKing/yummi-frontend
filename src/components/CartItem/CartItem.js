import React from "react";
import "./CartItem.css"

const CartItem = (props) => {
    return (
        <div className="cart-item">
            <div className="item">
                {props.item.name}
            </div>
            <div className="item">
                {props.item.price}
            </div>
        </div>
    )
}

export default CartItem;
