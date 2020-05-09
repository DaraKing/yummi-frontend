import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import "./Checkout.css";
import { USD_TO_EUR, DELIVERY_COST } from "../../constants";

const mapStateToProps = state => {
    return { cart: state.cart }
}

const Checkout = ({cart}) => {

    const [addressChange, setAddressChange] = useState(false);
    const [cardChange, setCardChange] = useState(false);
    const [address, setAddress] = useState("");
    const [information, setInformation] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardMonth, setCardMonth] = useState(null);
    const [cardAge, setCardAge] = useState(null);
    const [cardSecurityCode, setCardSecurityCode] = useState(null);
    const [subtotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0)

    const sumSubTotal = () => {
        let sum = 0;

        cart.forEach((item) => {
            sum += item.quantity * item.price
        })

        setSubTotal(sum.toFixed(2));
    }

    const sumTotal = () => {
        let sum = Number(subtotal) + DELIVERY_COST;

        setTotal(sum.toFixed(2))
    }

    useEffect(sumSubTotal, [cart])
    useEffect(sumTotal, [subtotal])

    const returnTotalPrice = (item) => {
        let usd = item.quantity * item.price;
        let eur = item.quantity * item.price * USD_TO_EUR;

        return (
            <div>
                <div>${usd.toFixed(2)}$</div>
                <div>${eur.toFixed(2)}€</div>
            </div>
        )
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    const handleInformation = (event) => {
        setInformation(event.target.value)
    }

    const handleCardNumber = (event) => {
        setCardNumber(event.target.value)
    }

    const handleCardAge = (event) => {
        setCardAge(event.target.value)
    }

    const handleCardMonth = (event) => {
        setCardMonth(event.target.value)
    }

    const handleCardSecurityCode = (event) => {
        setCardSecurityCode(event.target.value)
    }

    const setAddressChangeState = () => {
        setAddressChange(!addressChange)
    }

    const setCardChangeState = () => {
        setCardChange(!cardChange)
    }

    return (
        <div className="checkout">
            <div className="order-options">
                <div className="section">
                    <div className="section-title">
                        <h3>Delivery Address</h3>
                        <div className="change-btn" onClick={setAddressChangeState}>Change</div>
                    </div>
                    <div className="delivery-content">
                        Address:
                        {
                            addressChange ? (
                                <input type="text" value={address} onChange={handleAddressChange}/>
                            ) : (address)
                        }
                    </div>
                    <div className="delivery-content">
                        Information:
                        {
                            addressChange ? (
                                <textarea onChange={handleInformation}>
                                    {information}
                                </textarea>
                            ) : (information)
                        }
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">
                        <h3>Card information</h3>
                        <div className="change-btn" onClick={setCardChangeState}>Change</div>
                    </div>
                    <div className="delivery-content">
                        Card number:
                        {
                            cardChange ? (
                                <input type="text" value={cardNumber} onChange={handleCardNumber}/>
                            ) : (cardNumber)
                        }
                    </div>
                    <div className="delivery-content">
                        Expire date:
                        {
                            cardChange ? (
                                <div>
                                    Month
                                    <select onChange={handleCardMonth}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    Age
                                    <select onChange={handleCardAge}>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                    </select>
                                </div>

                            ) : (cardMonth + "/"+ cardAge)
                        }
                    </div>
                    <div className="delivery-content">
                        Security code:
                        {
                            cardChange ? (
                                <input type="text" value={cardSecurityCode} onChange={handleCardSecurityCode}/>
                            ) : (cardSecurityCode)
                        }
                    </div>
                </div>
                <div className="total-section">
                    <h2>Summary</h2>
                    <div>
                        <b>Subtotal before delivery</b> {subtotal} $ | {(subtotal*USD_TO_EUR).toFixed(2)} €
                    </div>
                    <div>
                        <b>Delivery charge</b> {DELIVERY_COST} $ | {(DELIVERY_COST*USD_TO_EUR).toFixed(2)} €
                    </div>
                    <div>
                        <b>Total</b>  {total} $ | {(total*USD_TO_EUR).toFixed(2)} €
                    </div>
                </div>
            </div>
            <div className="cart">
                Your cart
                {
                    cart.map((item) =>
                        <div className="item" key={item}>
                            <div>
                                <img className="item-image" src={item.image} alt="Pizza" />
                            </div>
                            <div>{item.name}</div>
                            <div>
                                <div>{item.quantity} x {item.price}$</div>
                                <div>{item.quantity} x {item.price * USD_TO_EUR}€</div>
                            </div>
                            {returnTotalPrice(item)}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default connect(mapStateToProps, null)(Checkout);
