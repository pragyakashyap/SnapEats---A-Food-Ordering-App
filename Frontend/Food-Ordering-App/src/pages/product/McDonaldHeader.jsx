// McDonalds.jsx
import React from 'react';
import { Clock, Search, Bike } from 'lucide-react';
import './McDonalds.css';

const McDonaldsHeader = () => {
  return (
    <div className="header-container">
      {/* Dark header section */}
      <div className="main-header">
        <div className="header-content">
          {/* Top text */}
          <p className="tagline">I'm lovin' it!</p>
          
          {/* Restaurant name */}
          <h1 className="restaurant-name">McDonald's East London</h1>
          
          {/* Info badges */}
          <div className="info-badges">
            <div className="badge">
              <span>Minimum Order: 12 GBP</span>
            </div>
            <div className="badge">
              <Bike size={16} />
              <span>Delivery in 20-25 Minutes</span>
            </div>
          </div>
        </div>

        {/* Rating card */}
        <div className="rating-card">
          <div className="rating-info">
            <div className="rating-number">3.4</div>
            <div className="stars">★★★☆☆</div>
            <div className="review-count">1,250 reviews</div>
          </div>
          <img 
            src={"https://res.cloudinary.com/dft6bqu4v/image/upload/v1732459959/Rectangle_44_vue7ti.png"}
            alt="McDonald's burger and fries"
            className="food-image"
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="bottom-section">
        <div className="opening-hours">
          <Clock size={20} className="clock-icon" />
          <span>Open until 3:00 AM</span>
        </div>
        
        {/* Title and search */}
        <div className="offers-container">
          <h2 className="offers-title">All Offers from McDonald's East London</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search from menu..."
              className="search-input"
            />
            <Search size={16} className="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default McDonaldsHeader;