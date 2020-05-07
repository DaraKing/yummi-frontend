import React, {useState} from 'react';
import './Header.css';
import {
    Link
} from "react-router-dom";
import pizza from '../../icons/pizza.svg';
import { ReactComponent as ShoppingCart } from '../../icons/shopping-cart.svg';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { cart: state.cart }
}

const HeaderRender = ({cart}) => {

    const [displayCart, setDisplayCart] = useState(false);

    const renderCartContent = () => {
        if(displayCart) {
            return <div className="cart-content"></div>
        }
        return ""
    }

    const toggleCartContent = () => {
        setDisplayCart(!displayCart)
    }

    return  (
        <div>
            <div className="header">
                <img className="pizza-logo" src={pizza} alt="Pizza" />
                <div className="navigation">
                    <Link to="/pizzas">Pizzas</Link>
                </div>
                <div className="cart-area">
                    <div className="cart-count">{cart.length}</div>
                    <ShoppingCart className="shopping-cart" onClick={() => toggleCartContent()} />
                </div>
            </div>
            {renderCartContent()}
        </div>

    )
};

const Header = connect(mapStateToProps)(HeaderRender);

export default Header;
