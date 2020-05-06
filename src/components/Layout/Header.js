import React from 'react';
import {
    Link
} from "react-router-dom";

const Header = () => {
    return  (
        <div>
            <Link to="/pizzas">Pizzas</Link>
        </div>
    )
};

export default Header;
