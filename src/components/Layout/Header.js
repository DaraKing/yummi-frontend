import React from 'react';
import './Header.css';
import {
    Link
} from "react-router-dom";
import pizza from '../../icons/pizza.svg';
import { ReactComponent as ShoppingCart } from '../../icons/shopping-cart.svg';

const Header = () => {
    return  (
        <div className="header">
            <img className="pizza-logo" src={pizza} alt="Pizza" />
            <div className="navigation">
                <Link to="/pizzas">Pizzas</Link>
            </div>
            <div className="cart-area">
                <div className="cart-count">1</div>
                <ShoppingCart className="shopping-cart" />
            </div>
        </div>
    )
};

export default Header;
