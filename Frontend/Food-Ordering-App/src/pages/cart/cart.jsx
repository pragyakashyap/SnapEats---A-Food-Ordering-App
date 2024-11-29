import icon from "./arrow.png";
import cart from "../../assets/images/Cart.png";


export const Cart = ({ isCartOpen, toggleCart }) => {
 
  return (
    <div onClick={toggleCart} className="cart-div">
    <div  className="cart-btn" style={{ cursor: "pointer" }}>
      <img
        style={{ height: "30px", width: "30px", marginLeft: "1rem" }}
        src={cart}
        alt="Cart"
      />
      My Cart
    </div>

    <img
      className="arrow"
      style={{ height: "30px", width: "30px", margin: "12px 1.25rem" }}
      src={icon}
    />
    
  </div>
  )
}
