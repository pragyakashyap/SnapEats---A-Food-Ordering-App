import "./header.css";
import Logo from "../../assets/images/LOGO 1.png";
import user from "../../assets/images/user.png";
import hamburgerPng from "../../assets/images/Menu.png";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/images/Cart.png";

const Header = ({ isCartOpen, toggleCart }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div className="header-nav">
      <div className="header-nav-left-info">
        <div className="logo">
          <img style={{ width: "150px" }} src={Logo} />
        </div>
        <div className="header-buttons">
          <button className="default-selected">Home</button>
          <button>Browse Menu</button>
          <button>Special Offers</button>
          <button>Restaurants</button>
          <button>Track Order</button>
        </div>
        <div className="hamburger-navbar">
          <img src={hamburgerPng} style={{ height: 65, width: 65 }} />
        </div>
      </div>
      <div className="header-nav-right-info">
        <div className="profile" onClick={handleClick}>
          <img src={user} />
          <span>Hey {localStorage.getItem("username").split(" ")[0]}</span>
        </div>
        <div
          className="header-cart-btn"
          style={{ cursor: "pointer", backgroundColor: "#028643" }}
          onClick={toggleCart}
        >
          <img
            style={{ height: "30px", width: "30px" }}
            src={cart}
            alt="Cart"
          />
          <span>My Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
