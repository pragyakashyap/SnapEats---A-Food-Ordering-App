import React from 'react';
import appStore from "../../assets/images/app-store-badges-en 1.png";

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
          <h2 className="main-title">
            Order<span className="highlight">ing</span> is more
          </h2>
          <div className="subtitle-block">
            <span className="highlight-text">Personalised</span>
            <span className="separator">&</span>
            <span className="instant-text">Instant</span>
          </div>
          <p className="description">
            Download the Orderuk app for faster ordering
          </p>
          <div className="store-buttons">
            <a href="#" className="store-link">
              <img 
                src={appStore}
                alt="Download on App Store"
                className="store-image"
              />
            </a>
           
          </div>
        </div>
      </div>

      <style>{`
        .banner-container {
          width: 100%;
          background-color: #ffffff;
          overflow: hidden;
        }

        .banner-content {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .left-section {
          width: 65%;
        }

        .banner-image {
          width: 100%;
          display: block;
        }

        .title-block {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 45%;
          padding: 20px;
        }

        .main-title {
          color: #000;
          font-size: 32px;
          font-weight: bold;
          margin: 0;
          margin-bottom: 10px;
        }

        .highlight {
          color: #FF6B00;
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          top: 0;
          right: -2px;
          width: 2px;
          height: 100%;
          background-color: #FF6B00;
        }

        .subtitle-block {
          display: inline-flex;
          align-items: center;
          background-color: #000B3E;
          padding: 8px 15px;
          border-radius: 3px;
          margin-bottom: 15px;
        }

        .highlight-text {
          color: #FF6B00;
          font-size: 24px;
          font-weight: 500;
        }

        .separator {
          color: white;
          font-size: 24px;
          margin: 0 8px;
        }

        .instant-text {
          color: white;
          font-size: 24px;
          font-weight: 500;
        }

        .description {
          color: #333;
          font-size: 14px;
          margin: 0 0 15px 0;
        }

        .store-buttons {
          display: flex;
          gap: 10px;
        }

        .store-link {
          display: block;
        }

        .store-image {
          height: 35px;
          width: auto;
        }

        @media (max-width: 768px) {
          .banner-content {
            flex-direction: column;
          }

          .left-section {
            width: 100%;
          }

          .title-block {
            position: relative;
            width: 100%;
            transform: none;
            padding: 20px;
            text-align: center;
          }

          .subtitle-block {
            justify-content: center;
          }

          .store-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AppDownloadBanner;