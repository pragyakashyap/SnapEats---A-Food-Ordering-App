import "./CartModel.css";
import Share from "./Share.png";
import Basket from "./Basket.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const CartModel = ({
  cartItems,
  removeFromCart,
  subtotal,
  discount,
  deliveryFee,
  total,
  isCartOpen,
  toggleCart,
}) => {
  if (!cartItems) return null;
  const cardEmpty = cartItems.length === 0 ? true : false;

  const navigate= useNavigate()
  const handleClick = ()=>{
    navigate("/checkout")
  }

  return (
    <div className={`cart-banner ${isCartOpen ? "open" : ""}`}>
      <div className="share-cart">
        <div className="share-btn">
          <img src={Share} />
          <p>Share this cart with your friends</p>
        </div>
        <div className="copy-link">
          <button>Copy Link</button>
        </div>
      </div>

      <div className="cart-header">
        <img src={Basket} />
        <p>My Basket</p>
      </div>
      {cardEmpty ? (
        <p style={{ padding: "1rem" }}>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <Card key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
        </div>
      )}
      {!cardEmpty && (
        <div className="cart-summary">
          <div className="amount-calc">
            <div className="extra-amount">
              <h4>Sub Total :</h4>
              <span style={{ fontSize: "18px" }}>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="extra-amount">
              <h4>Discount :</h4>
              <span style={{ fontSize: "18px" }}>-₹{discount.toFixed(2)}</span>
            </div>

            <div className="extra-amount">
              <h4>Delivery Fee : </h4>
              <span style={{ fontSize: "18px" }}>
                ₹{deliveryFee.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="total-amount">
            <h4 style={{ margin:'0px'}}>Total to pay</h4>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              ₹{total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
      
      <div className="promotions">
        <div>
        Choose your free item..
        </div>
      </div>

      <div onClick={handleClick} className="checkout-button">
        <FontAwesomeIcon icon={faArrowRight} />
        <span style={{ width: "80%", fontSize: "18px" }}>Checkout</span>
      </div>
    </div>
  );
};

export default CartModel;
