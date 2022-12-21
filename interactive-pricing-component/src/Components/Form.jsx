import React, {useState} from "react";
import check from "../assets/images/icon-check.svg"
import "../App.css"


export default function Form(){
    
    const[price, setPrice] = useState(55)
    const[yearlyBilling, setYearlyBilling] = useState(false)
    
    function handleChange(e){setPrice(e.target.value)}
    function placeOrder(){console.log("orderDone")}

    function toggleDiscount(){setYearlyBilling(prev => !prev)}


    
    return (
        <form onSubmit={placeOrder}>

            <div className="form-pricing">
            <h4 className="views">{(price * 2.5).toFixed(2)}K PAGEVIEWS</h4>
            <input className="range-input" type="range"  min="5" max="100" step="1" value={price} onChange={handleChange}/>
            <h3 className="price">
                ${parseFloat(yearlyBilling? price-(price *0.25): price).toFixed(2)} 
                
                <span>/ month</span></h3>
            </div>

            <div className="form-period">
                <p className="period">Monthly Billing</p>
                <input type="checkbox" id="switch" checked={yearlyBilling} onChange={toggleDiscount}/><label htmlFor="switch">Toggle</label>
                <p className="period yearly">Yearly Billing</p>
                
            </div>

            <div className="form-footer">

                <ul className="service-information">
                    <li className="information">
                        <img src={check}/>
                        Unlimited websites    
                    </li>
                    <li className="information">
                        <img src={check}/>
                        100% data ownership    
                    </li>
                    <li className="information">
                        <img src={check}/>
                        Email reports
                    </li>
                </ul>

                <button className="submit-btn" type="submit">Start my trial</button>
            </div>
        </form>
    )
}