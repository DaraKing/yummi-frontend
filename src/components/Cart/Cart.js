import React from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./Cart.css"
import { removeFromCart } from "../../js/actions";
import { USD_TO_EUR } from "../../constants";

const mapDispatchToProps = {
    removeFromCart
};

const Cart = (props) => {
    const history = useHistory();

    const removePizzaFromCart = (data) => {
        props.removeFromCart(data);
    }

    const totalPrice = () => {
        let dollars = 0,
            euros;

        props.items.forEach((item) => {
            dollars += item.price * item.quantity;
        })

        euros = dollars*USD_TO_EUR
        return `${dollars} $ / ${euros.toFixed(2)} €`;
    }

    const redirectToCheckout = () => {
        history.push('/checkout')
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
                {
                    props.items.length !== 0 ? (
                        <div className="cart-footer">
                            <div className="proceed-button" onClick={redirectToCheckout}>
                                Proceed
                            </div>
                            <div className="total-price">
                                Total price: {totalPrice()}
                            </div>
                        </div>
                    ) : ""
                }

            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Cart);
