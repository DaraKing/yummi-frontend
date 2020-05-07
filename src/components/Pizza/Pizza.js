import React from "react";
import "./Pizza.css"
import { connect } from 'react-redux';
import { addToCart } from "../../js/actions";

const mapDispatchToProps = {
    addToCart
};

const Pizza = (props) => {

    function addPizzaToCart(data) {
        props.addToCart(data);
    }

    return (
        <div className="pizza-content">
            <div className="image-container">
                <img className="pizza-image" src={props.data.image} alt="Pizza" />
            </div>
            <div className="text-container">
                <div className="pizza-name">
                    {props.data.name}
                </div>
                <div className="pizza-description">
                    {props.data.description}
                </div>
                <div className="order-details">
                    <div>
                        {props.data.price} &#x20AC;
                    </div>
                    <div>
                        <button onClick={() => addPizzaToCart(props.data)} className="add-to-cart">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Pizza);
