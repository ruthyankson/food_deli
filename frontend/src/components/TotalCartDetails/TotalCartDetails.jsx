import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

import './TotalCartDetails.css'

const TotalCartDetails = () => {

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className="total-cart-details">
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Total</p>
                <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
        </div>
    )
}

export default TotalCartDetails
