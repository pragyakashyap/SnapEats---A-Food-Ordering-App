
import "../login/login.css"
import Logo from "../../assets/images/LOGO 2.png";
import appstoreBadge from "../../assets/images/app-store-badges-en 1.png";
import Instagram from "../../assets/images/Instagram.png";
import Facebook from "../../assets/images/Facebook.png";
import Snapchat from "../../assets/images/Snapchat.png";
import TikTok from "../../assets/images/TikTok.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <h2 className="footer-logo">
            <img src={Logo} />
          </h2>
          <div className="app-buttons">
            <img
              src={appstoreBadge}
              alt="Download on App Store and Google Play"
              className="app-button"
            />
          </div>
          <p>Company #490033-445, Registered with House of Companies.</p>
        </div>
        <div className="footer-middle">
          <p>Get Exclusive Deals in your Inbox</p>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
          <p>we wont spam, read our email policy</p>
          <div className="icons">
            <img src={Facebook}></img>
            <img src={Instagram}></img>
            <img src={TikTok}></img>
            <img src={Snapchat}></img>
          </div>
        </div>
        <div className="footer-right">
          <div className="left">
            <h4>Legal Pages</h4>
            <p>Terms and conditions</p>
            <p>Privacy</p>
            <p>Cookies </p>
            <p>Modern Slavery Statement</p>
          </div>
          <div className="right">
            <h4>Important Links</h4>
            <p>Get help</p>
            <p>Add your restaurant</p>
            <p>Sign up to deliver </p>
            <p>Create a business account</p>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="left-bottom-container">
          <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        </div>
        <div className="right-bottom-container">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
