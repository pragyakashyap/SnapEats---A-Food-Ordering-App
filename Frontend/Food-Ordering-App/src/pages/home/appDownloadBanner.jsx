import React from "react";
import appStore from "../../assets/images/app-store-badges-en 1.png";
import "./banner.css"
import Logo from "../../assets/images/LOGO 1.png";

const AppDownloadBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        {/* Left side - Image */}
        <div className="left-section">
          <img
            src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732389671/friends-laughing-using-mobiles_2_1_wmvilr.png"
            alt="Happy couple using phones"
            className="banner-image"
          />
        </div>

        {/* Right side - Content */}
        <div className="title-block">
          <div className="main-title">
            <img style={{width:'150px'}} src={Logo} alt="" />
            ing is more
          </div>
          <div className="subtitle-block">
            <span className="highlight-text">Personalised</span>
            <span className="separator">&</span>
            <span className="instant-text">Instant</span>
          </div>
          <p className="description">
            Download the Orderuk app for faster ordering
          </p>
          <div className="store-buttons">
              <img
                src={appStore}
                alt="Download on App Store"
                className="store-image"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadBanner;
