import store from "../js/store";
import { addToCart, removeFromCart } from "./actions";

window.store = store;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
