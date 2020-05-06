import React, {useEffect, useState} from 'react';

const Pizzas = () => {
    const [pizzasList, setPizzasList] = useState([]);

    useEffect(() => {
        setPizzasList(["1", "2", "3"])
    }, []);

    return (
        <div>
            {pizzasList}
        </div>
    )
}

export default Pizzas;
