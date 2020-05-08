import React from "react";
import { connect } from 'react-redux';
import "./Cart.css"
import { removeFromCart } from "../../js/actions";

const mapDispatchToProps = {
    removeFromCart
};

const Cart = (props) => {

    function removePizzaFromCart(data) {
        props.removeFromCart(data);
    }

    return (
        <div className="cart-content">
            <div className="cart-list">
                {
                    props.items.map((item) =>
                        <div className="cart-item" key={item.pizza_id}>
                            <div className="item">
                                {item.name}
                            </div>
                            <div className="item">
                                {item.price}
                            </div>
                            <div className="item">
                                {item.quantity}
                            </div>
                            <div className="item remove" onClick={() => removePizzaFromCart(item)}>
                                x
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Cart);
