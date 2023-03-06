import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg"
import paypal from "../../assets/all-images/paypal.jpg"

import "../../Styles/Payment.css"
const PaymentMethod = () => {
    return (
        <>
            <div className="payment">
                <label htmlFor="direct" className="d-flex align-items-center gap-2">
                    <input type='radio' id='direct'/> Direct Bank TransFer
                </label>
            </div>
            <div className="payment mt-3">
                <label htmlFor="cheque" className="d-flex align-items-center gap-2">
                    <input type='radio' id='cheque'/> Cheque Payment
                </label>
            </div>
            <div className="payment mt-3 d-flex align-content-center justify-content-between">
                <label htmlFor="marter" className="d-flex align-items-center gap-2">
                    <input type='radio' id='marter'/> Marter Card
                </label>
                <img src={masterCard} alt=''/>
            </div>
            <div className="payment mt-3 d-flex align-content-center justify-content-between">
                <label htmlFor="paypal" className="d-flex align-items-center gap-2">
                    <input type='radio' id='paypal'/> Paypal
                </label>
                <img src={paypal} alt=''/>
            </div>
            <div className="payment mt-5 d-flex justify-content-end">
                <button>Reserve Now</button>
            </div>
        </>
    )
}
export default PaymentMethod