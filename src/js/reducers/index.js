import { ADD_TO_CART } from "../../constants";

const initialState = {
    cart: []
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let index = state.cart.indexOf(action.payload);
            let cart = state.cart.slice();

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
        default:
            return state
    }
}

export default cartReducer;
