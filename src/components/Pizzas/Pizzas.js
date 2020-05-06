import React, {useEffect, useState} from 'react';
import Pizza from "../Pizza/Pizza";
import "./Pizzas.css";
import {API_URL} from '../../constants';

const Pizzas = () => {
    const [pizzasList, setPizzasList] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/pizzas`)
            .then(res => res.json())
            .then(
                (result) => {
                    setPizzasList(result)
                },
                (error) => {
                    console.error(error)
                }
            )
        setPizzasList(["1", "2", "3"])
    }, []);

    return (
        <div className="pizzas-list">
            {pizzasList.map((item, index) => (
                <Pizza key={index} data={item} />
            ))}
        </div>
    )
}

export default Pizzas;
