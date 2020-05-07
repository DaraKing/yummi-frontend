import React from 'react';
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
    return  (
        <div className="header">
            <img className="pizza-logo" src={pizza} alt="Pizza" />
            <div className="navigation">
                <Link to="/pizzas">Pizzas</Link>
            </div>
            <div className="cart-area">
                <div className="cart-count">{cart.length}</div>
                <ShoppingCart className="shopping-cart" />
            </div>
        </div>
    )
};

const Header = connect(mapStateToProps)(HeaderRender);

export default Header;
