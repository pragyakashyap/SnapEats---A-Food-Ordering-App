import "./header.css";
import Logo from "../../assets/images/LOGO 1.png";
import user from "../../assets/images/user.png";
const Header = () => {
  return (
    <div className="header-nav">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="buttons">
        <button autoFocus className="default-selected">
          Home
        </button>
        <button>Browse Menu</button>
        <button>Special Offers</button>
        <button>Restaurants</button>
        <button>Track Order</button>
      </div>
      <div className="profile">
        <img style={{marginRight:"-15px"}} src={user} />
        <span>Login/Signup</span>
      </div>
    </div>
  );
};

export default Header;
