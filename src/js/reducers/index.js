import { ADD_TO_CART, REMOVE_FROM_CART } from "../../constants";

const initialState = {
    cart: []
};

function cartReducer(state = initialState, action) {
    let cart = [...state.cart];
    let index;

    switch (action.type) {
        case ADD_TO_CART:
            index = state.cart.indexOf(action.payload);

            if(index > -1) {
                cart[index].quantity = cart[index].quantity + 1;
            } else {
                let obj = action.payload;
                obj["quantity"] = 1;
                cart.push(obj);
            }

            return {
                ...state,
                cart
            }
        case REMOVE_FROM_CART:
            index = cart.indexOf(action.payload);

            if(cart[index].quantity === 1) {
                cart.splice(index, 1)
            }else {
                cart[index].quantity = cart[index].quantity - 1;
            }

            return {
                ...state,
                cart
            }
        default:
            return state
    }
}

export default cartReducer;
